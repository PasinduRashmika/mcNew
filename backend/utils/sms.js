var ShoutoutClient = require('shoutout-sdk');

var apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlMDg2MmRjMC1iYjZlLTExZWQtODk4Mi0wOWU5ZDliODY1OTAiLCJzdWIiOiJTSE9VVE9VVF9BUElfVVNFUiIsImlhdCI6MTY3ODAzMjA0MCwiZXhwIjoxOTkzNjUxMjQwLCJzY29wZXMiOnsiYWN0aXZpdGllcyI6WyJyZWFkIiwid3JpdGUiXSwibWVzc2FnZXMiOlsicmVhZCIsIndyaXRlIl0sImNvbnRhY3RzIjpbInJlYWQiLCJ3cml0ZSJdfSwic29fdXNlcl9pZCI6IjU3MzY0MSIsInNvX3VzZXJfcm9sZSI6InVzZXIiLCJzb19wcm9maWxlIjoiYWxsIiwic29fdXNlcl9uYW1lIjoiIiwic29fYXBpa2V5Ijoibm9uZSJ9.QKjec69XMLKFd_4HmgWMmz32qJ3Er8nWfnJ_fyCqIr0';

var debug = true, verifySSL = false;

var client = new ShoutoutClient(apiKey, debug, verifySSL);
var message = {
 "content": {"sms": "Sent via ShoutOUT Gateway"},
 "destinations": ["94771234567"],
 "source": "ShoutDEMO",
 "transports": ["SMS"]
};

client.sendMessage(message, (error, result) => {
 if (error) {
  console.error('Error sending message!',error);
 } else {
  console.log('Sending message successful!',result);
 }
});



module.exports = class Sms {
    constructor(user, url, btnUrl) {
      this.to = user.email;
      this.name = `${this.titleCapital(user.title || "")}. ${this.nameCapital(
        user.name || "User"
      )}`;
      this.url = url;
      this.email = user.email;
      this.from = process.env.EMAIL_FROM;
      this.btnUrl = btnUrl;
    }
  
    // make the first letter of the name capital
    nameCapital = (name) => {
      const newName = name.split(" ").map((el) => {
        return el.charAt(0).toUpperCase() + el.slice(1);
      });
  
      return newName.join(" ");
    };
  
    // make the first letter of the title capital
    titleCapital = (title) => {
      if (!title) {
        return "";
      }
      const newTitle = title.charAt(0).toUpperCase() + title.slice(1);
      return newTitle;
    };
  
    // newTransport() {
    //   if (process.env.NODE_ENV === "production") {
    //     return nodemailer.createTransport({
    //       service: "gmail",
    //       auth: {
    //         user: process.env.EMAIL_USERNAME_PORD,
    //         pass: process.env.EMAIL_PASSWORD_PROD,
    //       },
    //       pool: true,
    //       maxMessages: Infinity,
    //       maxConnections: process.env.EMAIL_MAX_CONNECTIONS_PROD || 10,
    //     });
    //   }
  
    //   // in DEVELOPMENT use nodemailer to send Emails
    //   return nodemailer.createTransport({
    //     host: process.env.EMAIL_HOST,
    //     port: process.env.EMAIL_PORT,
    //     auth: {
    //       user: process.env.EMAIL_USERNAME,
    //       pass: process.env.EMAIL_PASSWORD,
    //     },
    //     pool: true, // use pooled connection
    //     rateLimit: true, // enable to make sure we are limiting
    //     maxConnections: 1, // set limit to 1 connection only
    //     maxMessages: 1, // send 1 email per second
    //   });
    // }
  
    // SEND the actual EMAIL
    async send(template, subject) {
      // 1. RENDER HTML based template
      const html = await ejs.renderFile(
        `${__dirname}/../templates/${template}.ejs`,
        {
          name: this.name,
          url: this.url,
          subject,
          email: this.email,
          password: process.env.DEFAULT_USER_PASSWORD,
          btnUrl: this.btnUrl,
        }
      );
  
      // 2. DEFINE Email Options
      const mailOptions = {
        from: this.from,
        to: this.to,
        subject,
        attachments:[{
          filename : 'logo.png',
          path:'E:/Final Year Project/Development/medical-center-administrative-system/backend/templates/logo.png',
          cid:'logo'
      }],
        html,
        text: htmlToText(html, {
          wordwrap: 130,
        }),
      };
  
      // 3. SEND email
      await this.newTransport().sendMail(mailOptions);
    }
  
    async sendWelcome() {
      await this.send("welcomeEmail", "Welcome to Medical Center Administrative System");
    }
  
    async sendPasswordReset() {
      await this.send(
        "passwordReset",
        "Password Reset Token (Valid only for 10 mins)"
      );
    }
  
    async sendAccountDeactivated() {
      await this.send(
        "accountDeactivatedEmail",
        "Your account has been deactivated!"
      );
    }
  };