var user = {
    verify: function (username, password, callback) { 
        console.log(username, password);
        if (username == "admin" && password == "admin") {
            console.log(username);
            return callback(null, username);
        } else {
            return callback(null, null);
        }
    },
};

module.exports = (user);