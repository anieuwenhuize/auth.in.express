import express from 'express';
import exphbs from 'express-handlebars';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

const app = express();

// support URL-encoded bodies from  payload
app.use(bodyParser.urlencoded({ 
    extended: true }));

// support cookie parsing from HTTP Req
app.use(cookieParser());

// set .hbs ext instead of .handlebars
app.engine('hbs', exphbs({
    extname: '.hbs'
}));

app.set('view engine', 'hbs');

app.listen(3000);

// set request handler
app.get('/', function (req, res) {
    res.render('home');
});