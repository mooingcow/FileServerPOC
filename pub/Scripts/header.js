const loggedInUserID = localStorage.getItem("role");
const currenturl = window.location.href;

if (isNaN(loggedInUserID)) {
    var returnhtml = '<a href="/login/" id="buttonfont">LOGIN</a>';
    $("#contact").append(returnhtml);
} else {
    var returnhtml = '<a href="/profile" id="buttonfont">PROFILE</a>';
    $("#contact").append(returnhtml);
}
