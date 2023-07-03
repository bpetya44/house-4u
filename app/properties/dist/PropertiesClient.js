"use client";
"use strict";
exports.__esModule = true;
var navigation_1 = require("next/navigation");
var react_1 = require("react");
var axios_1 = require("axios");
var react_hot_toast_1 = require("react-hot-toast");
var Container_1 = require("../components/Container");
var Heading_1 = require("../components/Heading");
var ListingCard_1 = require("../components/listings/ListingCard");
var PropertiesClient = function (_a) {
    var listings = _a.listings, currentUser = _a.currentUser;
    var router = navigation_1.useRouter();
    var _b = react_1.useState(""), deletingId = _b[0], setDeletingId = _b[1];
    var onCancel = react_1.useCallback(function (id) {
        setDeletingId(id);
        axios_1["default"]["delete"]("/api/listings/" + id)
            .then(function () {
            react_hot_toast_1["default"].success("Listing deleted successfully");
            router.refresh();
        })["catch"](function (error) {
            var _a, _b;
            react_hot_toast_1["default"].error(((_b = (_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.error) || "Something went wrong");
        })["finally"](function () {
            setDeletingId("");
        });
    }, [router]);
    return (React.createElement(Container_1["default"], null,
        React.createElement(Heading_1["default"], { title: "Properties", subtitle: "List of Your properties" }),
        React.createElement("div", { className: "\r\n        mt-10 \r\n        grid \r\n        grid-cols-1\r\n        sm:grid-cols-2\r\n        md:grid-cols-3\r\n        lg:grid-cols-4\r\n        xl:grid-cols-5\r\n        \r\n        gap-8\r\n        " }, listings.map(function (listing) { return (React.createElement(ListingCard_1["default"], { key: listing.id, data: listing, actionId: listing.id, onAction: onCancel, disabled: deletingId === listing.id, actionLabel: "Delete property", currentUser: currentUser })); }))));
};
exports["default"] = PropertiesClient;
