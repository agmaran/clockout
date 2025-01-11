import Joi from 'joi';

export type TGetDailyStockPricesParams = {
    date?: string;
}

export const GetDailyStockPricesSchema = Joi.object({
    date: Joi.date().iso().required(),
});
