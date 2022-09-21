const express = require('express')
const nodemailer = require('nodemailer')
const app = express();

app.get("/send-email", async (req, res) => {


    let transporter = nodemailer.createTransport({
        host: "mail.test.com.br",
        port: 8080,
        auth: {
            user: "test@test.com.br",
            pass: "yourPassword"
        }
      });

    let message = {
        from: "test@test.com.b",
        to: "test@email.com.br",
        subject: "Email enviado com Sucesso!",
        text: "Tudo Ocorreu conforme Esperado!",
        html: "<h1>Email Enviado!</h1><p>Perfeita Execução!</p>"
    }

    transporter.sendMail(message, (err) => {
        if (err)
        return res.status(400).json({
            error: true,
            message: "An error has ocorred and the e-mail was not successfully sent!",
            reason: err
        })
    })

    return res.json({
        error: false,
        message: "Email enviado com sucesso!",
        reason: "Success!"
    })
});

const port = 8080

app.listen(port, () => {
    console.log("Listening on port:", port)
})