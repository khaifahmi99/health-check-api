import axios from 'axios';
import express from 'express';

import { PATHS } from '../constant/path';

const router = express.Router();

router.get('/services/:name', async (req, res) => {
  const pathKeys = Object.keys(PATHS);
  const serviceName = req.params.name.toUpperCase();

  if (!pathKeys.includes(serviceName)) {
    return res.status(404).json({
      errorMessage: 'Service Name Not Found'
    });
  }

  const URL = PATHS[serviceName];
  if (await isHealthy(URL)) {
    return res.json({
      serviceName,
      status: 'Healthy'
    })
  } else {
    return res.json({
      serviceName,
      status: 'Unavailable'
    })
  }

});

const isHealthy = async (url: string): Promise<boolean> => {
  const response = await axios.get(url)
    .then(({ status }) => {
      return status === 200;
    })
    .catch(() => false)
    
  return response; 
}

export default router;
