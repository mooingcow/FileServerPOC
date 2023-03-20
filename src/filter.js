const fs = require("fs");
const RegExp = require("xregexp");
var files = fs.readdirSync("./upload");

for (let i = 0; i < files.length; i++) {
    console.log(files[i]);
    const filenameRegex = new RegExp(/^\[([\w\d]+)\] .+\.[a-z]+$/g);

    if (!filenameRegex.test(files[i])) {
        console.log("Invalid File Name: " + files[i]);
        continue;
    }

    fileName = files[i].slice(files[i].indexOf("]") + 2);
    console.log(fileName);
    fileHeader = files[i].slice(1, files[i].indexOf("]"));
    console.log(fileHeader);
    var dir = "/var/www/src/testDirectory/" + fileHeader;

    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }

    var oldPath = "/var/www/src/upload/" + files[i];
    var newPath = "/var/www/src/testDirectory/" + fileHeader + "/" + files[i];

    fs.rename(oldPath, newPath, (err) => {
        if (err) throw err;
        console.log("Successfully renamed - AKA moved!");
    });
}
