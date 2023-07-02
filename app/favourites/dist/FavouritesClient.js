"use client";
"use strict";
exports.__esModule = true;
var Container_1 = require("../components/Container");
var Heading_1 = require("../components/Heading");
var ListingCard_1 = require("../components/listings/ListingCard");
var FavouritesClient = function (_a) {
    var listings = _a.listings, currentUser = _a.currentUser;
    return (React.createElement(Container_1["default"], null,
        React.createElement(Heading_1["default"], { title: "Favourites", subtitle: "Your favourite listings" }),
        React.createElement("div", { className: "\r\n            mt-10 \r\n            grid \r\n            grid-cols-1\r\n            sm:grid-cols-2\r\n            md:grid-cols-3\r\n            lg:grid-cols-4\r\n            xl:grid-cols-5\r\n            \r\n            gap-8\r\n            " }, listings.map(function (listing) { return (React.createElement(ListingCard_1["default"], { currentUser: currentUser, key: listing.id, data: listing })); }))));
};
exports["default"] = FavouritesClient;
