const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const dynamicData = ['Öğe 1', 'Öğe 2', 'Öğe 3', 'Öğe 4'];
    res.render('index', { data: dynamicData });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
