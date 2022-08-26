const express = require('express');

const app = express();

const talkers = [];

app.get('/talker', (req, res) => res.status(200).json({ talkers }));

module.exports = app;