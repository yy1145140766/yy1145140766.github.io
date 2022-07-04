import { setErrorHandler } from "./utils/utils.js";

var jumpBySearch = function () {
    var search = new URLSearchParams(window.location.search);
    if (search.has("movecar")) {
        gotoMoveCar();
    } else {
        gotoHomePage();
    }
};

var gotoPage = function (page) {
    window.location.href = window.location.origin
        + "/" + page + "/index.html"
        + window.location.search
        + window.location.hash;
};

var gotoHomePage = function () {
    gotoPage("homepage");
};

var gotoErrorPage = function () {
    gotoPage("error");
};

var gotoMoveCar = function () {
    gotoPage("movecar");
};

window.mainLoad = function () {
    setErrorHandler((from, arg) => {
        localStorage.setItem("error", `${from}\n${JSON.stringify(arg, null, 4)}`);
        gotoErrorPage();
    });
    jumpBySearch();
};