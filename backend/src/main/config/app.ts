import express from 'express';
import cors from 'cors';
import { transactionRoutes } from '@/main/routes/transaction-routes';

export const app = express();
app.use(cors());
app.use("/transaction", transactionRoutes);