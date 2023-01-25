var user = {
    verify: function (username, password, callback) { 
        console.log(username, password);
        if (username.length === 0 || password.length === 0) {
            return callback(null, null);
        } else if (username == "admin" && password == "admin") {
            console.log(username)
            return callback(null, username);
        }
    },
};

module.exports = (user);