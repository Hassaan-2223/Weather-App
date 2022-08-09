const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');

// Public path
const pubicpath = "D:/Self-Learning-Courses/Backend Development/2.Express.js-Course/Tutorials/Project-1/Express-Web/public";


// setting view engine and changing its name to templates and adding partials
app.set('view engine','hbs');
app.set('views',"D:/Self-Learning-Courses/Backend Development/2.Express.js-Course/Tutorials/Project-1/Express-Web/templates/views")
hbs.registerPartials("D:/Self-Learning-Courses/Backend Development/2.Express.js-Course/Tutorials/Project-1/Express-Web/templates/partials")



// serve static files in public if not found then rout
app.use(express.static(pubicpath));



// Routing

app.get('',(req,res) => {
    res.render('index');
});

app.get('/about',(req,res) => {
    res.render('about');
});

app.get('/weather',(req,res) => {
    res.render('weather');
});

app.get('*',(req,res) => {
    res.render('404error');
});







app.listen(8000,() => {
    console.log('listening');
});