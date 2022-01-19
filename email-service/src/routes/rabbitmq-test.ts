// import express from 'express';
// import RabbitmqServer from '../rabbitmq-server';

// const queueRouter = express.Router();

// queueRouter.post('/queue', async function(req, res, next) {
  
//     const server = new RabbitmqServer('amqp://admin:admin@rabbitmq:5672');
//     await server.start();
//     await server.publishInQueue('email', JSON.stringify(req.body));
//     await server.publishInExchange('amq.direct', 'rota', JSON.stringify(req.body));
//     res.send(req.body);
// });

// export default queueRouter;
