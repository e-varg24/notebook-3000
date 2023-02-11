
const PORT = process.env.PORT || 3001;
const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

// helper methods
const apiRoutes = require('./routes/api');
const htmlRoutes = require('./routes/htmlRoutes');

// middleware for URL encoded data
app.use(express.urlencoded({
  extended: true
}));

app.use(express.static('public'));

// middleware for the parsing of JSON data
app.use(express.json());
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
  console.log(`API server is now on port ${PORT}!`);
});