import axios from 'axios';
import {ListItemProps } from '../components/list/Item';

export interface DailyStockPricesData {
    watchListData: ListItemProps[],
    trendingData: ListItemProps[],
    gainersData: ListItemProps[],
    losersData: ListItemProps[],
}

export const getDailyStockPrices = async (date: string): Promise<DailyStockPricesData | undefined> => {
    try {
        const dailyStockPrices = await axios.get(`http://localhost:8080/api/v1/stocks/${date}`);
        return dailyStockPrices?.data as DailyStockPricesData;
    } catch (err) {
        console.log(err);
        return undefined;
    }
}
