const sgMail = require('@sendgrid/mail')
sgMail.setApiKey("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")

module.exports.SendMail = (req, res) => {
    const { name, email } = req.body;
    const from = "karthikeyan@ladderstack.com";
    const to = "karthikeyan@ladderstack.com";
    const subject = "New Contact Request";
    const output = `
    <p>You have a new Contact Request</p>
    <h3>Contact Details</h3>
    <ul>
      <li>Name: ${name}</li>
      <li>Email: ${email}</li>
    </ul>
  `;
    sendEmail(to, from, subject, output);
}

const sendEmail = (to, from, subject, text) => {
    const msg = {
        to,
        from,
        subject,
        html: text,
    };
    sgMail.send(msg, function (err, result) {
        if (err) {
            console.log("Email Not Sent Error Occured", err);
        } else {
            console.log("Email was Sent");
        }
    });
}


