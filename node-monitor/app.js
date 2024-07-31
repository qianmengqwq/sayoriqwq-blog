import express from 'express';
import client, { collectDefaultMetrics } from 'prom-client';
import cors from 'cors';

const register = new client.Registry();
collectDefaultMetrics({ register });

const app = express();

app.use(express.text())
app.use(cors())

app.get('/metrics', async (_req, res) => {
  try {
    res.set('Content-Type', register.contentType);
    res.end(await register.metrics());
  } catch (err) {
    res.status(500).end(err);
  }
});

app.post('/report', function (req, res) {
  const { name, rating} = JSON.parse(req.body);
  let counter = register.getSingleMetric(name);
  if (!counter) {
    counter = new client.Counter({
      name,
      help: req.body,
      registers: [register],
      labelNames: ['rating'],
    });
  }
  counter.inc({
    rating
  }, 1);
  res.status(200).json({ success: true });
});

app.listen(4001, '0.0.0.0');
