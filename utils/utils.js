var defaultHandleError = function (from, arg) {
    alert(`${from}\n${JSON.stringify(arg, null, 4)}`);
};

export function setErrorHandler(handler) {
    window.onerror = function (event, source, lineno, colno, error) {
        var arg = { message: event, url: source, line: lineno, column: colno, error: error };
        if (handler) {
            handler("onerror", arg);
        } else {
            defaultHandleError("onerror", arg);
        }
    };
    window.addEventListener('error', function (event) {
        if (handler) {
            handler("error", event);
        } else {
            defaultHandleError("error", event);
        }
    });
    window.addEventListener('unhandledrejection', function (event) {
        if (handler) {
            handler("unhandledrejection", event);
        } else {
            defaultHandleError("unhandledrejection", event);
        }
    });
};