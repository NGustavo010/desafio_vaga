import { Router } from 'express';
import { adaptRoute } from '@/main/adapters/express-route-adapter';
import { upload } from '@/main/config/multer';
import { makeRegisterTransactionsController } from '@/main/factories/controllers/register-transactions-controller-factory';

export const transactionRoutes = Router();

transactionRoutes.post('/register-transactions', upload.single('file'), adaptRoute(makeRegisterTransactionsController()));