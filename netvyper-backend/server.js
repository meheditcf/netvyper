const express = require('express');
const http = require('http');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const authRoutes = require('./routes/authRoutes')

const port = process.env.PORT || process.env.API_PORT;

const app = express();
app.use(cors());
app.use(express.json())


//register the routes
app.use('/api/auth', authRoutes);

const server = http.createServer(app);


mongoose.connect(process.env.MONGO_URI).then(()=> {
    server.listen(port, ()=> {
        console.log(`Database connected`);
        console.log(`Listening on port ${port}`);
    })
}).catch((err)=> {
    console.log('Database connection error');
    console.log(err);
})

