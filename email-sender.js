// email-sender.js
const nodemailer = require("nodemailer");

// Configure transporter (using Gmail as example)
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your-email@gmail.com",   // replace with your email
    pass: "your-app-password"       // replace with your app password
  }
});

// Email options
let mailOptions = {
  from: "your-email@gmail.com",
  to: "your-email@gmail.com",       // sending to yourself
  subject: "Test Email from Node.js",
  text: "Hello! This is a test email sent using Nodemailer."
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log("Email sent: " + info.response);
});
