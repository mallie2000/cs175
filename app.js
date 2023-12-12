const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About page' });
});

app.get('/membership', (req, res) => {
  res.render('membership', { title: 'Membership Page' });
});
app.get('/courses', (req, res) => {
  res.render('courses', { title: 'Courses Page' });
});
app.get('/credit', (req, res) => {
  res.render('credit', { title: 'Credit Page' });
});
app.get('/reducing_costs', (req, res) => {
  res.render('reducing_costs', { title: 'Reducing Costs Page' });
});
app.get('/saving_money', (req, res) => {
  res.render('saving_money', { title: 'Reducing Costs Page' });
});
app.get('/stocks', (req, res) => {
  res.render('stocks', { title: 'Reducing Costs Page' });
});


const port = 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
