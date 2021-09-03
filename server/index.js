const express = require('express');
const app = express();



app.get("/", (req, res) => {
res.send("G\'day Mate!");
});

app.get("/login", (req, res) => {
    res.send("You cannot login. as there is no login page lulor even functionality for that matter");
});

app.get("/borat", (req, res) => {
    res.send("Very Nice");
});


app.listen(3001, () => {
    console.log("running on port 3001 or whatever port is configued");
})