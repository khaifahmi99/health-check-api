import 'dotenv/config';
import express from 'express';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit'

import router from './routes/health-check';

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})


const app = express();
const port = process.env.PORT || 3000;

app.use(helmet());
app.use(limiter);
app.use('/v1', router);

app.get('/', (_, res) => {
  return res.send(`This is a health check service API. Running fine at [${new Date().toDateString()}]`);
});

app.listen(port, () => {
  return console.log(`Health Check API is listening at http://localhost:${port}`);
});