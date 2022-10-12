const stripe = require("stripe")
    ("sk_test_51JromQSGFeszKGV2Zkde9mZRfumQkI5WhaWyI9K0A9hYAWUSUigF55X70beC2oAYXaNhyoajEZFld9Wcnn9qTgxe00hSUOR8hh");

module.exports.Payment = async (req, res) => {
    try {
        console.log(req.body)
        stripe.customers.create({
            name: req.body.stipeName,
            email: req.body.stripeEmail,
            source: req.body.stripeToken
        }).then(customer =>
            stripe.charges.create(
                {
                    amount: req.body.amount * 100,
                    currency: "inr",
                    customer: customer.id
                }
            )
        ).then(() => res.status(200).json({
            message: 'successfully inserted',
            statusCode: 200,
            data: body,
            error: null,
        })).catch(err => res.status(400).json({
            message: 'some thing went wrong',
            statusCode: 400,
            data: null,
            error: err,
        }))
    } catch (err) {
        res.send(err);
    }
};

module.exports.getPayment = async (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(res);
    return res.end();
}