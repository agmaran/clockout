import * as dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import stockRouter from './components/stock/stock.router';
import { errorHandler } from './middlewares';
dotenv.config();

// Global interface for errors
declare global {
    interface CustomError extends Error {
        status?: number,
    }
};

async function initServer() {
    try {
        const app = express();

        // Server config
        app.use(cors<cors.CorsRequest>({
            origin: '*',
            credentials: true,
        }));
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({extended: true}));
        
        // API routes
        app.use('/api', stockRouter);
        
        // Error handler middleware
        app.use(errorHandler);
        
        const PORT = Number(process.env.PORT);
        app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`));
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};
  
initServer();