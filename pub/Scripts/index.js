const express = require("express");
const app = express();

//Reset Stylesheet
app.get("/resetcss", (req, res) => {
    res.sendFile("reset.css", { root: '../Stylesheets' });
});
//Header & Footer Stylesheet and Image
app.get("/headerfootercss", (req, res) => {
    res.sendFile("header_footer.css", { root: '../Stylesheets' });
});
app.get("/logoimage", (req, res) => {
    res.sendFile("sp_air-logo.png", { root: '../Images' });
});
//Header Script
app.get("/headerjs", (req, res) => {
    res.sendFile("header.js", { root: '../Scripts' });
});


//Login
app.get("/login", (req, res) => {
    res.sendFile("login.html", { root: '../HTML' });
});
app.get("/indexjs", (req, res) => {
    res.sendFile("index.js", { root: '../Scripts' });
});
app.get("/logincss", (req, res) => {
    res.sendFile("login.css", { root: '../Stylesheets' });
});
app.get("/loginimage", (req, res) => {
    res.sendFile("login-logo.png", { root: '../Images' });
});

//Index
app.get("/", (req, res) => {
    res.sendFile("index.html", { root: '../HTML' });
});
app.get("/indexcss", (req, res) => {
    res.sendFile("index.css", { root: '../Stylesheets' });
});
app.get("/dropdownarrow", (req, res) => {
    res.sendFile("down-arrow.png", { root: '../Images' });
});
app.get("/searcharrow", (req, res) => {
    res.sendFile("searcharrow.png", { root: '../Images' });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Client server has started listening on port ${PORT}`);
});