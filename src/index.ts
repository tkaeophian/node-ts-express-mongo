import express, { Application, NextFunction, Request, Response } from 'express';

import cache from './middleware/cache';
import compression from 'compression';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import mongoose from 'mongoose';
import todoRoutes from './routes/todos';

dotenv.config();
const port = process.env.PORT || 3001;
const dbUrl = process.env.DB_URL || '';
const app: Application = express();
// register middleware
app.use(compression());
app.use(helmet());
app.use(cors());
app.use(cache);
app.use((req: Request, res: Response, next: NextFunction) => {
    console.log(req.path, req.method);
    next();
});

// register routes
app.use('/api/todos', todoRoutes);

mongoose
    .connect(dbUrl)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(
                `⚡️[server]: Connected to DB & Server is running at http://localhost:${port}`
            );
        });
    })
    .catch((error) => console.log(error));
