import { Controller } from "@/contracts/application/controllers/controller";
import { HttpRequest, HttpResponse } from "@/contracts/application/controllers/http";
import { ok } from "@/application/helpers/http/http-helper";
import fs from "fs";
import { Transaction } from "@/domain/entities/transaction";
import { RegisterTransactionsContract } from "@/contracts/domain/usecases/register-transactions-contract";

export class RegisterTransactionsController extends Controller {
    constructor(
        private readonly registerTransactions: RegisterTransactionsContract
    ){
        super();
    }

    formatTransactions(fileBuffer: Buffer): Transaction[] {
        const transactions: Transaction[] = [];
        const transactionsText = fileBuffer.toString().split('\n');
        for(let i = 0; i < transactionsText.length; i++) {
            const transactionText = transactionsText[i];
            if(!transactionText) break;
            const transactionData = transactionText.split(';');
            const transaction = {
                id: transactionData[0].split(':')[1],
                nome: transactionData[1].split(':')[1],
                cpfCnpj: transactionData[2].split(':')[1],
                data: transactionData[3].split(':')[1],
                valor: Number(transactionData[4].split(':')[1])
            };
            transactions.push(transaction);
        };
        return transactions;
    }

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        const startTime = Date.now();
        const fileBuffer = fs.readFileSync(httpRequest.file.path);
        const transactions = this.formatTransactions(fileBuffer);
        await this.registerTransactions.execute(transactions);
        fs.unlinkSync(httpRequest.file.path);
        const executionTime = `${Date.now() - startTime}ms`;
		return ok({
            executionTime
        });
	}
}