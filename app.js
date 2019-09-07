
// const http = require('http');
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const connectDb = require('./config/db');
const app = express();
// connect to database
connectDb();

// init bodyparser
app.use(express.json({extended : false}));

const PORT = process.env.PORT || 5000;

app.get('/',(req,res,next) => res.send("API running"));
// define routes
app.use('/api/users',require('./routes/api/users'));
app.use('/api/auth',require('./routes/api/auth'));
app.use('/api/profile',require('./routes/api/profile'));
app.use('/api/post',require('./routes/api/post'));

app.use((req,res,next) => {
    res.status(404).send('<h1>Page Not Found</h1>');
});
app.listen(PORT, () => console.log(`Server Started on port ${PORT}`));

