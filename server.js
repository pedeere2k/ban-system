
const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();
app.use(express.static(__dirname));

app.get('/confirmar', async (req, res) => {
  const numero = "<Número Não Registrado>";

  // ENVIO DE EMAIL
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'tuntungtungsahuur@gmail.com',
      pass: 'DIBALAKA' // Substitua pela senha de app do Gmail
    }
  });

  const mailOptions = {
    from: 'tuntungtungsahuur@gmail.com',
    to: 'support@support.whatsapp.com',
    subject: `Meu número especial de comércio acabou de cair por bugs de seu aplicativo, se não resolver irei MIGRAR o telegram: ${numero}`,
    text: 'POR FAVOR, LEIAM ISSO !'
  };

  try {
    await transporter.sendMail(mailOptions);
    res.redirect('/sucesso.html');
  } catch (error) {
    res.send('Erro ao enviar email: ' + error.message);
  }
});

app.listen(3000, () => console.log('Painel rodando em http://localhost:3000'));
