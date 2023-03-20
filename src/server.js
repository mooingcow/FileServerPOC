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
    console.log("App hosted at 178.128.112.37");
});

//POST ROUTE FROM FILE UPLOAD
app.post("/upload/", upload.array("file"), (req, res) => {
    console.log("hello");
    try {
        console.log("Uploading File");
        res.send("File Uploaded");
    } catch (err) {
        console.log(err);
    }

    const fs = require("fs");
    var files = fs.readdirSync("./upload");

    const RegExp = require("xregexp");
    for (let i = 0; i < files.length; i++) {
        const filenameRegex = new RegExp(/^\[([\w\d]+)\] .+\.[a-z]+$/g);

        if (!filenameRegex.test(files[i])) {
            console.log("Invalid File Name: " + files[i]);
            continue;
        }
        if(files[i].slice(0, 1) != "[") {
            console.log("Invalid File Name: " + files[i]);
            continue;
        }
 
        fileName = files[i].slice(files[i].indexOf("]") + 2);
        console.log(fileName);
        fileHeader = files[i].slice(1, files[i].indexOf("]"));
        console.log(fileHeader);
        var dir = "/storage/" + fileHeader;

        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }

        var oldPath = "/var/www/src/upload/" + files[i];
        var newPath = "/storage/" + fileHeader + "/" + files[i];

        fs.rename(oldPath, newPath, (err) => {
            if (err) throw err;
            console.log("Successfully renamed - AKA moved!");
        });
    }
});
