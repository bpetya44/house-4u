"use client";
"use strict";
exports.__esModule = true;
var useCountries_1 = require("@/app/hooks/useCountries");
var Avatar_1 = require("../Avatar");
var ListingCategory_1 = require("./ListingCategory");
var dynamic_1 = require("next/dynamic");
var Map = dynamic_1["default"](function () { return Promise.resolve().then(function () { return require("../Map"); }); }, {
    ssr: false
});
var ListingInfo = function (_a) {
    var _b;
    var user = _a.user, description = _a.description, roomCount = _a.roomCount, guestCount = _a.guestCount, bathroomCount = _a.bathroomCount, locationValue = _a.locationValue, category = _a.category;
    var getByValue = useCountries_1["default"]().getByValue;
    var coordinates = (_b = getByValue(locationValue)) === null || _b === void 0 ? void 0 : _b.latlng;
    return (React.createElement("div", { className: "col-span-4 flex flex-col gap-8" },
        React.createElement("div", { className: "flex flex-col gap-2" },
            React.createElement("div", { className: "\r\n                text-xl\r\n                font-semibold\r\n                flex\r\n                flex-row\r\n                items-center\r\n                gap-2\r\n                " },
                React.createElement("div", null,
                    "Hosted by ", user === null || user === void 0 ? void 0 :
                    user.name),
                React.createElement(Avatar_1["default"], { src: user === null || user === void 0 ? void 0 : user.image })),
            React.createElement("div", { className: "\r\n            flex\r\n            flex-row \r\n            items-center\r\n            gap-4\r\n            font-light\r\n            text-neutral-500\r\n             " },
                React.createElement("div", null,
                    guestCount,
                    " ",
                    guestCount > 1 ? "guests" : "guest"),
                React.createElement("div", null,
                    roomCount,
                    " ",
                    roomCount === 1 ? "room" : "rooms"),
                React.createElement("div", null,
                    bathroomCount,
                    " ",
                    bathroomCount === 1 ? "bathroom" : "bathrooms"))),
        React.createElement("hr", null),
        category && (React.createElement(ListingCategory_1["default"], { icon: category.icon, label: category.label, description: category.description })),
        React.createElement("hr", null),
        React.createElement("div", { className: "text-lg font-light text-neutral-500" }, description),
        React.createElement("hr", null),
        React.createElement(Map, { center: coordinates })));
};
exports["default"] = ListingInfo;
