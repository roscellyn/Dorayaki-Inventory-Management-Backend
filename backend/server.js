const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// const uri = process.env.STANDWITHDORAYAKI_DB_URI;
// const uri = 'mongodb://mongo:27017/standwithdorayaki';
const uri = 'mongodb://localhost:27017/dorayaki';

mongoose.connect(uri, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once('open', () => {
	console.log('MongoDB database connection established successfully');
});

const storesRouter = require('./routes/stores.js');
const dorayakisRouter = require('./routes/dorayakis.js');

app.use('/api/v1/stores', storesRouter);
app.use('/api/v1/variants', dorayakisRouter);

app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});
