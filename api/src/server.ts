import * as dotenv from 'dotenv';
import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import stockRouter from './components/stock/stock.router';
dotenv.config();

declare global {
    interface CustomError extends Error {
        status?: number,
    }
};

async function initServer() {
    try {
        const app = express();
        app.use(cors<cors.CorsRequest>({
            origin: '*',
            credentials: true,
        }));
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({extended: true}));
        app.use('/api', stockRouter);
        
        // Error handler middleware
        app.use((error: CustomError, req: Request, res: Response, next: NextFunction) => {
            if (error.status) {
                res.status(error.status).json({ message: error.message });
            }
            res.status(500).json({ message: error.message });
        });
        
        const PORT = Number(process.env.PORT);
        app.listen(8080, () => console.log(`Server started on http://localhost:${PORT}`));
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};
  
initServer();