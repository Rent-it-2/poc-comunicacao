const nodemailer = require('nodemailer');
const SMTP_CONFIG = require('./config/smtp');
const express = require('express');
const app = express();
const port = 3000; // Escolha a porta que desejar
const transporter = nodemailer.createTransport({
    host: SMTP_CONFIG.host,
    port: SMTP_CONFIG.port,
    secure: false,
    auth: {
        user: SMTP_CONFIG.user,
        pass: SMTP_CONFIG.pass
    },
    tls: {
        rejectUnauthorized: false,
    },
});
async function enviarEmail() {
    const mailSend = await transporter.sendMail({
       html: `<h1>Enviando pelo endpoint<h1> <br />
                <img src="https://s2.glbimg.com/YKqb68IxCqdWGSq_wqaSVM2mn9k=/e.glbimg.com/og/ed/f/original/2018/02/26/macaco-narigudo.jpg"> `,
       subject: 'Confirmação de pedido',
       to: ['icarod.menezes@gmail.com','jonathangilber@hotmail.com'],
   
    })
    console.log(mailSend)
   }

app.post('/send-email', (req, res) => {
    enviarEmail();
    res.send('Email enviado com sucesso');
  });

// Inicie o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});



