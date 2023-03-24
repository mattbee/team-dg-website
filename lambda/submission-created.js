const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SG_MAIL)

exports.handler = function(event) {
  const data = JSON.parse(event.body).payload.data;

  const msg = {
    to: data.email, // Change to your recipient
    from: 'auction@frogsauction.com', // Change to your verified sender
    subject: `Your silent auction bid for ${data.item}`,
    text: `Hi ${data.name}.\n\nYour bid of £${data.bid_amount} for the ${data.item} was all good.\n\nGood luck!!!\n\n\nIf you win you will be sent a payment link, which will need to be paid by the 20th April for FA Cup Semi Final Tickets and 28th April for other items, or the item will be offered to the next highest bidder.\n\n`,
    html: `<p>Hi ${data.name},</p><p>Your bid of <strong>£${data.bid_amount}</strong> for the <strong>${data.item}</strong> was all good.</p><p>Good luck!!</p><p><br /><br />If you win you will be sent a payment link, which will need to be paid by the 20th April for FA Cup Semi Final Tickets and 28th April for other items or the item will be offered to the next highest bidder.</p>`,
  }

  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error(error)
    })
};
