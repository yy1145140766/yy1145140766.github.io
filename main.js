import { setErrorHandler } from "./utils/utils";

window.mainLoad = function () {
    setErrorHandler((from, arg) => {
        localStorage.setItem("error", `${from}\n${JSON.stringify(arg, null, 4)}`);
    });
    jumpBySearch();
};

window.jumpBySearch = function () {
    var search = new URLSearchParams(window.location.search);
    if (search.has("movecar")) {
        gotoMoveCar();
    } else {
        gotoHomePage();
    }
};

window.gotoPage = function (page) {
    window.location.href = window.location.origin
        + "/" + page + "/index.html"
        + window.location.search
        + window.location.hash;
};

window.gotoHomePage = function () {
    gotoPage("homepage");
};

window.gotoMoveCar = function () {
    gotoPage("movecar");
}