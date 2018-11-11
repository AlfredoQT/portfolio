const express = require('express');
const path = require('path');

const app = express();

app.use('/', express.static('build'));

app.listen(4001, () => console.log(`Listening on port ${4001}`));
