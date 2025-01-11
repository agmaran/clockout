import { Request, Response, NextFunction } from 'express';
import * as stockService from './stock.service';
import { GetDailyStockPricesSchema } from './stock.dto';

export const getDailyStockPrices = async (req: Request, res: Response, next: NextFunction) => {
    let response;
    try {
        const { error } = GetDailyStockPricesSchema.validate(req.params);
        if (error) {
            next(new Error(error.details[0].message));
        }
        response = await stockService.getDailyStockPrices(req.params);
        console.log("Came here");
    } catch (err) {
        next(new Error('Error getting daily stock prices'));
    }
    res.status(200).send(response);
}
