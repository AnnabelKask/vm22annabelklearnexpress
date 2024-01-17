console.log('hello');

const express = require('nunjucks');
const app = express();
const port = 3000;


nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.get('/', (req, res) => {
  res.render('index.html');
});

app.get('/page3', (req, res) => {
    res.sendFile(__dirname +'/page2.html');
    console.log('oii keegi tuli')
  });

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});