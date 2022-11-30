//imports------------------------------------
const mongoose = require('mongoose');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const cors = require('cors');

const app = express();


//-------------------------------------------





//Router imports-----------------------------------

const AuthRoute = require('./routes/authRouter');
const marketRouter= require('./routes/marketRouter');
const serviceRouter = require('./routes/serviceRouter');
// const ticketRouter = require('./routes/ticketRouter');


//database-connection--------------------------------
mongoose.connect('mongodb://0.0.0.0:27017/Cosmica', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log("MongoDB connected")) .catch((err) => console.log(err));


//----------------------------------


//configs-------------------

app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));

app.use(cors({
    origin: 'http://localhost:3000',
}));


//main links -------------------------------

app.use('/api/authen',AuthRoute);
// app.use('/api/ticket', ticketRouter);
app.use('/api/market', marketRouter);
app.use('/api/service', serviceRouter);



app.get('/api', (req,res) => {
    res.json({
        message: 'connected'
    }).status(200);
})


app.listen(3000, () => {
    console.log('Server listening at 3000');
})