const config = require('config');
const stripe = require('stripe')(config.get('stripe_key_secret'));
const Joi = require('joi');

const { Roles } = require('../utils/enum');

module.exports.addCard = async (req, res, next) => {
  const { body, userData } = req;
  const schema = Joi.object().keys({
    cardNumber: Joi.string().required(),
    cardExpMonth: Joi.string().required(),
    cardExpYear: Joi.string().required(),
    cardCVC: Joi.string().required()
  });
  const result = schema.validate(body);
  const { value, error } = result;
  const valid = error == null;
  if (!valid) {
    return res.status(400).json({
      message: 'Invalid request',
      data: body,
      error: error.details[0].message,
    });
  } else {
    if (userData.role !== Roles.admin) {
      return res.status(400).json({
        status: 400,
        message: 'Invalid request',
        data: 'Only Org Owner can add card details',
      });
    }

    if (userData.stripeID === '') {
      return res.status(400).json({
        status: 400,
        message: 'Invalid request',
        data: 'Stripe Customer not found',
      });
    }

    try {
      const cardToken = await stripe.tokens.create({
        card: {
          number: body.cardNumber,
          exp_month: body.cardExpMonth,
          exp_year: body.cardExpYear,
          cvc: body.cardCVC
        },
      });
      const card = await stripe.customers.createSource(userData.stripeID, {
        source: cardToken.id,
      });
      return res.status(200).json({
        status: 200,
        message: 'Success',
        data: card.id,
      });
    } catch (e) {
      return res.status(500).json({
        status: 500,
        message: 'Something went wrong',
        error: e.raw && e.raw.message ? e.raw.message : "Enter valid card details",
      });
    }
  }
};
