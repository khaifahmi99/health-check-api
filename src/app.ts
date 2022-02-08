import 'dotenv/config';
import express from 'express';
import { PATHS } from './constant/path';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (_, res) => {
  return res.send(`This is a health check service API. Running fine at [${new Date().toDateString()}]`);
});

app.get('/all', (_, res) => {
  const statuses = {};
  Object.keys(PATHS).forEach((service) => statuses[service] = null);

  res.send({
    statuses
  })
});

app.get('/service', (req, res) => {
  if (!req.query.name) {
    return res.status(200).send({
      errorMessage: 'No Service Name Provided'
    });
  }

  const pathKeys = Object.keys(PATHS);

  if (!pathKeys.includes((req.query.name as string).toUpperCase())) {
    return res.status(404).send({
      errorMessage: 'Service Name Not Found'
    });
  }

  res.send('OK');
})

app.listen(port, () => {
  return console.log(`Health Check API is listening at http://localhost:${port}`);
});