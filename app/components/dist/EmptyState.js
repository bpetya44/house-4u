"use client";
"use strict";
exports.__esModule = true;
var navigation_1 = require("next/navigation");
var Heading_1 = require("./Heading");
var Button_1 = require("./Button");
var EmptyState = function (_a) {
    var _b = _a.title, title = _b === void 0 ? "No results found" : _b, _c = _a.subtitle, subtitle = _c === void 0 ? "Try adjusting your search or filter to find what you're looking for." : _c, showReset = _a.showReset;
    var router = navigation_1.useRouter();
    return (React.createElement("div", { className: "\r\n    h-[calc(100vh-4rem)]\r\n    flex\r\n    flex-col\r\n    items-center\r\n    justify-center\r\n    w-full\r\n    text-center\r\n\r\n  " },
        React.createElement(Heading_1["default"], { center: true, title: title, subtitle: subtitle }),
        React.createElement("div", { className: "w-48 mt-4" }, showReset && (React.createElement(Button_1["default"], { outline: true, label: "Remove all filters", onClick: function () { return router.push("/"); } })))));
};
exports["default"] = EmptyState;
