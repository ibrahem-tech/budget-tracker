const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");



const PORT = process.env.PORT || 3006;

const app = express();


app.use(logger("dev"));

app.use(compression());

app.use(express.urlencoded({ extended: true }));
app .use(express.json());


//------Public -----//

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", { 
    useNewUrlParser: true,
    useFindAndModify: false,
   
});

//----routes----//



app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });