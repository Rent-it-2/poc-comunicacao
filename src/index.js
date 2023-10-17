const nodemailer = require('nodemailer');
const SMTP_CONFIG = require('./config/smtp');
const transporter = nodemailer.createTransport({
    host: SMTP_CONFIG.host,
    port: SMTP_CONFIG.port,
    secure: false,
    auth: {
        user: 'rentit.sptech@gmail.com',
        pass: 'wrqc niyf czvy owuj'
    },
    tls: {
        rejectUnauthorized: false,
    },
});

async function run() {
 const mailSend = await transporter.sendMail({
    html: `<h1>Olá! seu pedido foi confirmado<h1> <br />
             <img src="https://s2.glbimg.com/YKqb68IxCqdWGSq_wqaSVM2mn9k=/e.glbimg.com/og/ed/f/original/2018/02/26/macaco-narigudo.jpg"> `,
    subject: 'Confirmação de pedido',
    to: ['icarod.menezes@gmail.com','jonathangilber@hotmail.com'],

 })
 console.log(mailSend)
}

run();