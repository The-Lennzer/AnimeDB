const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

app.use(cors());
app.use(express.json());

const db = require('./utils/database')

const homeRoutes = require('./routes/home')
const queryRoutes = require('./routes/queryMachine')

app.use(homeRoutes)
app.use(queryRoutes)

app.listen(3000);
