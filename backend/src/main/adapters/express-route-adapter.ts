import { type Request, type Response } from 'express';
import { Controller } from '@/contracts/application/controllers/controller';
import { HttpRequest } from '@/contracts/application/controllers/http';

export const adaptRoute = (controller: Controller) => {
	return async (req: Request, res: Response) => {
		const queryParams: any = {};
		if (req.query) {
			const params = Object.keys(req.query);
			params.forEach((param) => {
				if (req.query[param]) {
					queryParams[param] = req.query[param];
				}
			});
		}
		const httpRequest: HttpRequest = {
			body: req.body,
			params: req.params,
			headers: req.headers,
			query: queryParams,
			file: req.file
		};
		const httpResponse = await controller.execute(httpRequest);
		if (httpResponse.statusCode >= 200 && httpResponse.statusCode < 300) {
			return res.status(httpResponse.statusCode).json(httpResponse.body);
		} 
		return res.status(httpResponse.statusCode).json({
			error: httpResponse.body.message,
		});
	};
};
