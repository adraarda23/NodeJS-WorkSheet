const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/veri-al', (req, res) => {
  const receivedData = req.body.veri;
  console.log('Alınan Veri:', receivedData);
  res.send('Veri başarıyla alındı.');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
