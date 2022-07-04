window.mainLoad = function () {
    var error = localStorage.getItem("error");
    if (error && error.length > 0) {
        document.getElementById("error").innerHTML = localStorage.getItem("error");
    } else {
        document.getElementById("error").innerHTML = "莫名其妙的错误！";
    }
};