const sgMail = require('@sendgrid/mail')

require('../secrets.js')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const confirmationEmail = (email, name, orderId) => {
  sgMail.send({
    to: email,
    from: process.env.EMAIL,
    subject: 'Your order has been processed',
    text: `Thank you for your order, ${name}. Order #${orderId} has been processed.`
  })
}

module.exports = {
  confirmationEmail
}
