import { Router } from 'express';
import { adaptRoute } from '@/main/adapters/express-route-adapter';
import { upload } from '@/main/config/multer';
import { makeRegisterTransactionsController } from '@/main/factories/controllers/register-transactions-controller-factory';
import { makeGetTransactionsController } from '@/main/factories/controllers/get-transactions-controller-factory copy';

export const transactionRoutes = Router();

transactionRoutes.get('/', adaptRoute(makeGetTransactionsController()));
transactionRoutes.post('/', upload.single('file'), adaptRoute(makeRegisterTransactionsController()));