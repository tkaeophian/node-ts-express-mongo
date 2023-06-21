import app from './app';

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(
        `⚡️[server]: Connected to DB & Server is running at http://localhost:${port}`
    );
});
