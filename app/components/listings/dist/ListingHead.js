"use client";
"use strict";
exports.__esModule = true;
var useCountries_1 = require("@/app/hooks/useCountries");
var Heading_1 = require("../Heading");
var image_1 = require("next/image");
var HeartButton_1 = require("../HeartButton");
var ListingHead = function (_a) {
    var title = _a.title, imageSrc = _a.imageSrc, locationValue = _a.locationValue, id = _a.id, currentUser = _a.currentUser;
    var getByValue = useCountries_1["default"]().getByValue;
    var location = getByValue(locationValue);
    return (React.createElement(React.Fragment, null,
        React.createElement(Heading_1["default"], { title: title, subtitle: (location === null || location === void 0 ? void 0 : location.region) + ", " + (location === null || location === void 0 ? void 0 : location.label) + " " }),
        React.createElement("div", { className: "\r\n        w-full\r\n        h-[60vh]\r\n        overflow-hidden\r\n        rounded-2xl\r\n        relative\r\n      " },
            React.createElement(image_1["default"], { src: imageSrc, alt: title, fill: true, className: "object-cover w-full" }),
            React.createElement("div", { className: "absolute top-5 right-5" },
                React.createElement(HeartButton_1["default"], { listingId: id, currentUser: currentUser })))));
};
exports["default"] = ListingHead;
