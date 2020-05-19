require('dotenv/config');
const express = require('express');
const fetch = require('node-fetch');
const staticMiddleware = require('./static-middleware');

const app = express();

app.use(staticMiddleware);
app.use(express.json());


app.get('/api/covid-stats', (req, res) => {
  fetch('https://api.smartable.ai/coronavirus/stats/US', {
    headers: {
      'Cache-Control': 'no-cache',
      'Subscription-Key': process.env.covid19_APIKey
    }
  })
    .then(response => response.json())
    .then(data => res.json(data))
    .catch(err => console.error(err));
})

app.listen(process.env.PORT, () => {
  console.log('Listening on port', process.env.PORT)
})
