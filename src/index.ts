import express from 'express';
import signale from 'signale';
import { PaymentRouter } from './payment/infrastructure/payment.routes';
import cors from 'cors';

const port = process.env.PORT || 3001;

const app = express();
app.disable("x-powered-by");

app.use(express.json());
app.use(cors({
    origin: 'https://ed-consumer.onrender.com',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH', 'HEAD', 'PREFLIGHT', 'CONNECT'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));

app.use('/payment', PaymentRouter);

app.listen(port, () => {
    signale.success(`Server running on port ${port}`);
});