//MODELS
var app = require("./controller/app.js");
var user = require("./model/files.js");

//MULTER
const multer = require("multer");
const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./upload");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});
const upload = multer({
    storage: multerStorage,
});

//CORS
var cors = require("cors");
app.use(cors());
//SERVER INITIALISATION
var port = 8081;
var server = app.listen(port, function () {
    console.log("App hosted at localhost:" + port);
});

//POST ROUTE FROM FILE UPLOAD
app.post("/upload/", upload.single("file"), (req, res) => {
    console.log("hello");
    try {
        console.log("Uploading File");
        res.send("File Uploaded");
    } catch (err) {
        console.log(err);
    }
});
