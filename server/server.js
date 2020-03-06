const express = require('express');
const mongoose = require('mongoose');

// Models
const item = require('./routes/api/item');
const category = require('./routes/api/category');
const paycheck = require('./routes/api/paycheck');

const app = express();

// Body Parse Middleware
app.use(express.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose
    .connect(db, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Use Routes
app.use('/api/item', item);
app.use('/api/category', category);
app.use('/api/paycheck', paycheck);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));