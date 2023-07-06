"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var EmptyState_1 = require("./components/EmptyState");
var ErrorState = function (_a) {
    var error = _a.error;
    react_1.useEffect(function () {
        console.error(error);
    }, [error]);
    return (React.createElement(EmptyState_1["default"], { title: "Oh no! Something went wrong.", subtitle: "Please try again later" }));
};
exports["default"] = ErrorState;
