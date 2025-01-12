import Joi from 'joi';

export type TGetDailyStockPricesParams = {
    date?: string;
}

export const GetDailyStockPricesSchema = Joi.object({
    date: Joi.date().iso().required(),
});

export type TResult = {
    T: string;
    c: number;
    h: number;
    l: number;
    n: number;
    o: number;
    t: number;
    v: number;
    vw: number;
}

export type TDailyStockPricesResponse = {
    adjusted: boolean;
    queryCount: number;
    request_id: string;
    resultsCount: number;
    status: string;
    results: TResult[];
}
