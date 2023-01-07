const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send({violatorsList: ["drone1", "drone2"]});
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
})
