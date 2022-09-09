import express from 'express';
import { engine } from 'express-handlebars';
import cookieParser from 'cookie-parser';
import urlencoded from 'body-parser';

const app = express();

// support URL-encoded bodies from  payload
app.use(urlencoded({ 
    extended: true }));

// support cookie parsing from HTTP Req
app.use(cookieParser());

// set .hbs ext instead of .handlebars
app.engine('.hbs', engine({extname: '.hbs'}));


app.set('view engine', '.hbs');

app.listen(3000);

// set request handler
app.get('/', function (req, res) {
    res.render('home');
});