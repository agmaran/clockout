import { Request, Response, NextFunction } from 'express';

export const errorHandler = (error: CustomError, req: Request, res: Response, next: NextFunction) => {
    if (error.status) {
        res.status(error.status).json({ message: error.message });
    }
    res.status(500).json({ message: error.message });
}
