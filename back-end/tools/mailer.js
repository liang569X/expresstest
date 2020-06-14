const nodemailer = require('nodemailer');

module.exports = async function main(tomail) {
  const mailOptions = {
    from: '"验证邮件，无需回复。" <574790158@qq.com>',
    to: tomail,
    subject: '验证码',
    html: `<b>${Math.random().toString().slice(-6)}</b>`
  };
  const transporter = await nodemailer.createTransport({
    service: 'qq',
    port: 465,
    secureConnection: true,
    auth: {
      user: '*********@qq.com',
      pass: '********'
    }
  });
  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        reject(error);
      }
      resolve(info.response);
    });
  });
};
