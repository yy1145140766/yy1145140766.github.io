import { setErrorHandler } from "./utils/utils";

window.mainLoad = function () {
    setErrorHandler();
    phoneCall();
};

window.phoneCall = function () {
    var phoneNumber = "18328425477";
    var search = new URLSearchParams(window.location.search);
    if (search.has("movecar")) {
        phoneNumber = search.get("movecar");
    } else {
        var kv = [];
        search.forEach(function (value, key) {
            kv.push({ key: key, value: value });
        });
        if (kv.length == 1 && kv[0].value == "") {
            phoneNumber = kv[0].key;
        }
    }
    window.location.href = "tel:" + phoneNumber;
};