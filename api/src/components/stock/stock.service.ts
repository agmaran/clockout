import axios from 'axios';
import { TGetDailyStockPricesParams } from './stock.dto';

export const createAxiosInstance = () => {
    return axios.create({
        baseURL: 'https://api.polygon.io',
        headers: {
            Authorization: `Bearer ${process.env.POLYGON_API_KEY}`,
        },
    });
}

export const getDailyStockPrices = async (params: TGetDailyStockPricesParams) => {
    const axiosInstance = createAxiosInstance();
    const response = await axiosInstance.get(`/v2/aggs/grouped/locale/us/market/stocks/${params.date}`);
    return response.data;
}