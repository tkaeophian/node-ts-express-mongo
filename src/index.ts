import app from './app';
import log from './utils/logger';

const port = process.env.PORT || 3001;

app.listen(port, () => {
    log.info(
        `⚡️[server]: Connected to DB & Server is running at http://localhost:${port}`
    );
});
