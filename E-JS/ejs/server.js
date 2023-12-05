const express = require('express');
const app = express();
const port = 3000;
var path = require ('path');
app.use(express.static(path.join(__dirname , 'views')));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const dynamicData = 'Merhaba, EJS ile dinamik veri!';
    res.render('index', { data: dynamicData });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
