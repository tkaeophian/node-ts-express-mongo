import express, { Application } from 'express';
import morgan from 'morgan';
import Router from './routes';
import compression from 'compression';
import helmet from 'helmet';
import cors from 'cors';
import cache from './middleware/cache';
import swaggerUi from 'swagger-ui-express';

const app: Application = express();

app.use(compression());
app.use(helmet());
app.use(cors());
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

export default app;
