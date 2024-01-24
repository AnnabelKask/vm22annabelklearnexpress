console.log('hello');
const nunjucks = require('nunjucks');
const express = require('express');
const app = express();
const port = 3000;


nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.get('/', (req, res) => {
  res.render('index.njk');
});

app.get('/page2', (req, res) => {
  res.render('page2.njk');
});

app.get('/form', (req, res) => {
  console.log(req.query);
  res.render('form.njk', req.query);
});

app.get('/form', (req, res) => {
    res.sendFile(__dirname +'page2.html');
    console.log('oii keegi tuli')
  });

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});