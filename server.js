const express = require("express");


const app = express();
const PORT = process.env.PORT || 8080;

// Used for data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());


require("./Develop/routes/html")(app);

app.listen(PORT, function(){
    console.log("http://localhost:" + PORT);
});

