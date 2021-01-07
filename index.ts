import express from 'express';
// rest of the code remains same
const app = express();
var routes = require('./routes/index');
const PORT = 3000;
app.use('/', routes);
var path = require('path');
app.get('/', (req, res) => res.send('Express + TypeScript Server sanjay'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, './public')));


app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});