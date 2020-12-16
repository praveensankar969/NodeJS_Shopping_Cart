const express = require('express');
const app = express();
const parser = require('body-parser');
const path = require('path');
const pageNotFound = require('./controllers/404');

app.set('view engine', 'ejs');
app.set('views', 'view');
app.use(express.static(path.join(__dirname,'public')));
app.use(parser.urlencoded({extended:false}));
const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');

app.use('/admin',adminRouter);
app.use(shopRouter);

app.use(pageNotFound.pageNotFound);

app.listen(4000);