"use client;";
"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var Avatar = function (_a) {
    var src = _a.src;
    return (React.createElement(image_1["default"], { className: "rounded-full", height: "50", width: "50", alt: "avatar", src: src || "/images/avatar.png" }));
};
exports["default"] = Avatar;
