import axios from 'axios';
import {ListItemProps } from '../components/list/Item';

export interface DailyStockPricesData {
    adjusted: boolean,
    count: number,
    queryCount: number,
    request_id: string,
    results: ListItemProps[],
    resultsCount: number,
    status: string,
}

export const getDailyStockPrices = async (date: string): Promise<ListItemProps[] | undefined> => {
    try {
        const dailyStockPrices = await axios.get(`http://localhost:8080/api/v1/stocks/${date}`);
        return (dailyStockPrices?.data as DailyStockPricesData)?.results as ListItemProps[];
    } catch (err) {
        console.log(err);
        return undefined;
    }
}
