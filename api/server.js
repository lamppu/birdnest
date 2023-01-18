const express = require('express');
const cors = require('cors');
const updateViolatorsMap = require('./controllers/update_violators_map.js');

let violatorsMap = new Map();
let unsuccessfulFetchArr = []

setInterval(async function () {
  await updateViolatorsMap(violatorsMap, unsuccessfulFetchArr);
}, 2000);

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());

app.get('/', (req, res) => {
})

app.get('/stream', (req, res) => {
  res.statusCode = 200;
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("connection", "keep-alive");
  res.setHeader("Content-Type", "text/event-stream");

  setInterval(() => {
    const data = JSON.stringify({violatorsArray: Array.from(violatorsMap.values())});
    res.write("data: " + data + "\n\n");
  }, 2000);
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
})

module.exports = app;