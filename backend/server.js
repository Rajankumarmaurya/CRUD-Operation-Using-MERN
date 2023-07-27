const express = require("express");
const app = express();
const PORT = 4000;
const DB = require('./db/conn')
const dotenv = require('dotenv')
dotenv.config()
DB();
const cors = require('cors');
app.use(cors());
app.use(express.json());
const Router = require('./routes/Routes')
app.use(Router)





app.listen(PORT, () => {
    console.log(`app is listing on ${PORT}`)
})
