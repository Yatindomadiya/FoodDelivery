const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const foodRouter = require('./routes/foodRoute');
const bodyParser = require('body-parser');
const adressRouter = require('./routes/adressroute');

// App config
const app = express();
const port = 3000;

// App middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

// DB connection
connectDB();

//api end point
app.use("/api/food", foodRouter)
app.use("api/delevery",adressRouter)
app.use('/images', express.static('upload'))

// Routes
app.get("/", (req, res) => {
    res.send("Hello, I'm API");
});

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});
