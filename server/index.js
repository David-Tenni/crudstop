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

app.get("/is", (req, res) => {
    res.send("Nice");
});

app.get("/stop", (req, res) => {
    res.send("No");
});

app.get("/motivation", (req, res) => {
    res.send("Error 404: not found");
});
app.listen(3001, () => {
    console.log("running on port 3001 or whatever port is configued");
})