const express = require('express');
const React = require('react');
const { renderToString } = require('react-dom/server');

const Home = require('./client/components/Home').default;

const app = express();

app.get('/', (req, res) => {
  const content = renderToString(<Home />);
  res.send(content);
});

app.listen(3003, () => console.log('Listening in port 3003'));
