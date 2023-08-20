import express, { query } from 'express';

const app = express();

app.get('/', (req, res) => {
  const q = req.query;
  console.log(q);
  res.send(`Ciao, ${q.name}!`);
});

app.listen(3000, () => {
  console.log('Open this link in your browser: http://127.0.0.1:3000');
});

app.get('/another-path', (req, res) => {
  res.send('Ciao on another path');
});

app.get('/users/:userId', (req, res) => {
  res.send(`The user id is: ${req.params.userId}`);
});

app.get('/math/:op', (req, res) => {
  const x = parseFloat(req.query.x);
  const y = parseFloat(req.query.y);

  const { op } = req.params;

  const result = op === 'add' ? x + y : op === 'substract' ? x - y : op === 'multiply' ? x * y :
    op === 'divide' ? x / y : false;

  // res.send(result ? `The result is ${result}` : 'Unrecognizable operation name');
  const resultObject = {
    numbers: {
      x: x,
      y: y,
    },
    operation: op,
    result: result ? result : 'Unrecognizable operation name',
  };

  res.send(resultObject);
});


