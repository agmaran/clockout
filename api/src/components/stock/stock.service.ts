import axios from 'axios';
import { TGetDailyStockPricesParams, TDailyStockPricesResponse, TResult } from './stock.dto';

const watchListStocksTickers = ['SPTF', 'AAP', 'ADBE', 'LFT'];

export const createAxiosInstance = () => {
    return axios.create({
        baseURL: 'https://api.polygon.io',
        headers: {
            Authorization: `Bearer ${process.env.POLYGON_API_KEY}`,
        },
    });
}

export const mapData = (results: TResult[]) => {
    return results.map(result => ({
        symbol: result.T,
        price: result.c,
        priceDifference: result.c - result.o,
        differencePercentage: (result.c - result.o) * result.o / 100,
    }));
}

export const getWatchListData = (results: TResult[]) => {
    const watchListData = results.filter(result => watchListStocksTickers.includes(result.T));
    return mapData(watchListData);
}

export const getTrendingData = (results: TResult[]) => {
    const trendingData = results.sort((a, b) => b.n - a.n).slice(0, 5); // Order by number of transactions and get top 5
    return mapData(trendingData);
}

export const getGainersAndLosersData = (results: TResult[]) => {
    const data = results.sort((a, b) => (b.c - b.o) - (a.c - a.o)); // Order from greatest to least open-close price difference
    return { gainersData: mapData(data.slice(0, 5)), losersData: mapData(data.slice(-5)) };
}

export const getDailyStockPrices = async (params: TGetDailyStockPricesParams) => {
    const axiosInstance = createAxiosInstance();
    const { date } = params;
    const response = (await axiosInstance.get(`/v2/aggs/grouped/locale/us/market/stocks/${date}`))?.data as TDailyStockPricesResponse;
    const watchListData = getWatchListData(response.results);
    const trendingData = getTrendingData(response.results);
    const { gainersData, losersData } = getGainersAndLosersData(response.results);
    return { watchListData, trendingData, gainersData, losersData };
}