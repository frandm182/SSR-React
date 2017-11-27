const express = require('express');

const app = express();

app.get('/', (req, res) => {});

app.listen(3003, () => console.log('Listening in port 3003'));
