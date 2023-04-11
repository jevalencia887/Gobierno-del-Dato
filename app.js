const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();

 app.set('view engine', 'ejs');
 app.use(expressLayouts);

 const path = require('path');
 app.use(express.static(path.join(__dirname, 'public')))
 //app.use(express.static(__dirname + '/public'));

 //utilizamos el router
 const router = require('./routes/router')
 app.use(router.routes)
/*
app,get('/', (req, res) => {
    res.send('Dashboard con Node Js');
}) */


app.listen(3000, () => {
    console.log('Server up runninq in http://localhost:3000')
})