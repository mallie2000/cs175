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

app.get('/quiz', (req, res) => {
  res.render('quiz', { title: 'Quiz Page' });
});

app.get('/calc', (req, res) => {
  res.render('calc', { title: 'Mortgage Calculator' });
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
  res.render('saving_money', { title: 'saving money page' });
});
app.get('/stocks', (req, res) => {
  res.render('stocks', { title: 'stocks Page' });
});
app.get('/first_time_home', (req, res) => {
  res.render('first_time_home', { title: 'First time home Page' });
});
app.get('/saving_for_retirement', (req, res) => {
  res.render('saving_for_retirement', { title: 'Saving for retirement Page' });
});
app.get('/401k_retirement_plans', (req, res) => {
  res.render('401k_retirement_plans', { title: '401K Retirement Plans' });
});
app.get('/roth_vs_traditional_ira', (req, res) => {
  res.render('roth_vs_traditional_ira', { title: 'Roth vs Traditional IRA' });
});
app.get('/down_payment', (req, res) => {
  res.render('down_payment', { title: 'Fundementals of Down Payments' });
});
app.get('/free_tax_filing', (req, res) => {
  res.render('free_tax_filing', { title: 'Free Tax Filing and Prep' });
});
app.get('/home_affordability', (req, res) => {
  res.render('home_affordability', { title: 'Home Affordability' });
});

app.get('/tax_bracket', (req, res) => {
  res.render('tax_bracket', { title: 'Different Tax Brackets' });
});
app.get('/federal_vs_state', (req, res) => {
  res.render('federal_vs_state', { title: 'Federal Taxes vs States Taxes:' });
});
app.get('/understanding_tax_witholding', (req, res) => {
  res.render('understanding_tax_witholding', { title: 'Understanding Tax Witholding' });
});
app.get('/mortgage_option', (req, res) => {
  res.render('mortgage_option', { title: 'Morgage Option' });
});
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
