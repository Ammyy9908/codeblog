const express = require('express');
const morgan = require('morgan')
const mongoose = require('mongoose')
const { extend } = require('lodash');
const blogRoutes = require('./routes/blog');


const DB_URI = 'mongodb+srv://Sumit:2145255sb8@cluster0.0wij2.mongodb.net/Blog';


const app = express();


// connect to the database

mongoose.connect(DB_URI, { useUnifiedTopology: true, useNewUrlParser: true }, () => {
    console.log('Database connection established');
})

// register a view engine
app.set('view engine', 'ejs');

// app.use((req, res,next)=>{
//     console.log(`hostname: ${req.hostname}`)
//     console.log(`path: ${req.path}`)
//     next();
// })

app.use(morgan('tiny'))
app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', async (req, res) => {
    res.redirect('/blogs');
});
app.get('/about', (req, res) => {
    res.render('about', { title: "About us" });
})
app.use('/blogs',blogRoutes);


app.use((req, res) => {
    res.render('404', { title: "404" });
})

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Listening at ${port}`)
})