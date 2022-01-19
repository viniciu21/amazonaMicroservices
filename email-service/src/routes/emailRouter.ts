import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const emailRouter = express.Router();

emailRouter.post('/email-send', expressAsyncHandler(async (req, res) => {
    
    const userTransporter = process.env.USER_TRANSPORTER
    const passwordTransporter = process.env.PASSWORD_TRANSPORTER

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: userTransporter,
            pass: passwordTransporter
        }
    });

    transporter.sendMail({
        from: 'Amazona <amazonamicroservices@gmail.com>',
        to: 'rafaeldacostafreire@gmail.com',
        subject: 'Titulo Teste3',
        text: 'Conteúdo Teste3'
    })
    .then((message) => {
        console.log(message);
        res.status(200).send(message);
    })
    .catch((err) => {
        console.log(err);
        res.status(500);
    })
}));

export default emailRouter;