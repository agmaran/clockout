import { Router } from 'express';
import { getDailyStockPrices } from './stock.controller';

const stockRouter = Router();

stockRouter.get('/v1/stocks/:date', getDailyStockPrices);

export default stockRouter;
