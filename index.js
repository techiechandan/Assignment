const connection = require('./connection');
const express = require('express');
const app = express();
const env = require('dotenv');
env.config();
const PORT = process.env.PORT || 4000
const path = require('path');
const bodyParser = require('body-parser');
const appRoutes = require('./routes/appRoutes');

// connecting to database
connection.connect((error) => {
    if (error) {
        console.log(error.message);
    } else {
        console.log('Connected to database!');
    }
});


// handling static files
app.use(express.static(path.join(__dirname, 'public')));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// handling routes
app.use("", appRoutes);

// handling viewengin
app.set('view engine', 'ejs');
app.set('views', 'view');



app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})

