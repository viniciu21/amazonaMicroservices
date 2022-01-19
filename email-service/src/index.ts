import express from 'express';
import dotenv from 'dotenv'
import http from 'http';
import emailRouter from './routes/emailRouter'
// import queueRouter from './routes/rabbitmq-test'

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', emailRouter);
// app.use('/', queueRouter);

const port = process.env.PORT || 5005;

const httpServer = http.createServer(app);

httpServer.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});