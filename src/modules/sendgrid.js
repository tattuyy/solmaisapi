const sgMail = require('@sendgrid/mail');
const key = require('../config/sendgrid.json');

sgMail.setApiKey(key.SENDGRID_API_KEY);

const msg = {
  to: 'phlsolmais@gmail.com',
  from: 'tattuyy@gmail.com',
  subject: 'Sending with Twilio SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<p>Utilize esse token: {{ token }}</p>',
};

sgMail.send(msg);