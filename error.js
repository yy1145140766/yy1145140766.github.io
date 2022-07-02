window.errorLoad = function () {
    if (localStorage.hasItem("error")) {
        document.getElementById("error").innerHTML = localStorage.getItem("error");
    } else {
        document.getElementById("error").innerHTML = "莫名其妙的错误！";
    }
};