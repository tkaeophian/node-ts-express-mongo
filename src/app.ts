import express, { Application } from 'express';

import Router from './routes';
import cache from './middleware/cache';
import compression from 'compression';
import dotenv from 'dotenv';
import errorHandler from './middleware/errorHandler';
import helmet from 'helmet';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';

dotenv.config();

const app: Application = express();

app.use(compression());
app.use(helmet());
app.use(cache);
app.use(express.json());
app.use(morgan('tiny'));
app.use(express.static('public'));
app.use(
    '/swagger',
    swaggerUi.serve,
    swaggerUi.setup(undefined, {
        swaggerOptions: {
            url: '/swagger.json'
        }
    })
);
app.use(Router);
app.use(errorHandler);

export default app;
