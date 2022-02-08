import 'dotenv/config';
import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (_, res) => {
  res.send(`This is a health check service API. Running fine at [${new Date().toDateString()}]`);
});

app.listen(port, () => {
  return console.log(`Health Check API is listening at http://localhost:${port}`);
});