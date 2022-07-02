window.mainLoad = function () {
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