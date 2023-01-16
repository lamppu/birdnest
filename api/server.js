const express = require('express');
const cors = require('cors');
const fetchViolators = require('./controllers/fetch_violators.js');

let violatorsList = [];

setInterval(async function () {
  violatorsList = await fetchViolators(violatorsList);
  //console.log(violatorsList);
}, 2000);

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  //res.send({violatorsList: violatorsList});
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
})

module.exports = app;