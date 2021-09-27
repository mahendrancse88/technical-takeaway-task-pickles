import * as nodemailer from '../../node_modules/nodemailer';
const handlebars = require("handlebars")
const fs = require("fs");
const path = require("path");
const mg = require("nodemailer-mailgun-transport");
export const sendEmail = async (name: string, email: string,) => {
 
  const emailTemplateSource = fs.readFileSync(path.join(__dirname, "/template.hbs"), "utf8")
  const mailgunAuth = {
    auth: {
      api_key: "fc7eb8ac91f059d94999d24c0d4081a4-45f7aa85-600b0fd2",
      domain: "sandbox1ed7f00a2d2f4cc7bb7c70affdc51e82.mailgun.org"
    }
  }
  
  const smtpTransport = nodemailer.createTransport(mg(mailgunAuth));
  const template = handlebars.compile(emailTemplateSource);
  const htmlToSend = template({message: "Successfully Data Added!!"})
  const mailOptions = {
    from: "mail@assignment.com",
    to: email,
    subject: "Successfully Data Added!!",
    html: htmlToSend
  }
  
  smtpTransport.sendMail(mailOptions, function(error, response) {
    if (error) {
      console.log(error)
    } else {
      console.log("Successfully sent email.")
    }
  })


};