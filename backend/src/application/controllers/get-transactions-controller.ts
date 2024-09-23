import { Controller } from "@/contracts/application/controllers/controller";
import { HttpRequest, HttpResponse } from "@/contracts/application/controllers/http";
import { ok } from "@/application/helpers/http/http-helper";
import { GetTransactionsContract, GetTransactionsParams } from "@/contracts/domain/usecases/get-transactions-contract";

export class GetTransactionsController extends Controller {
    constructor(
        private readonly getTransactions: GetTransactionsContract
    ){
        super();
    }

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        const getTransactionsParams = httpRequest.query as GetTransactionsParams;
        const transactions = await this.getTransactions.execute(getTransactionsParams);
        return ok(transactions);
	}
}