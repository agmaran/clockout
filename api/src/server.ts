import 'dotenv/config';import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';

async function initServer() {
    try {
        const app = express();
        const PORT = Number(process.env.PORT);
        app.listen({ port: PORT }, () =>
            console.log(`Server started on http://localhost:${PORT}`)
          );
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};
  
initServer();