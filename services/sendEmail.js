const nodemailer = require('nodemailer');

const sendEmail = async(options, job)=>{
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.APP_USER,
        pass: process.env.APP_PASS
    }
});

const mailOptions = {
    from: process.env.APP_USER,
    to: options.email,
    subject: options.subject,
    text: "Your otp is " + options.otp
}
await transporter.sendMail(mailOptions);
};
module.exports = sendEmail;