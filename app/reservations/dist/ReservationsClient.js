"use client";
"use strict";
exports.__esModule = true;
var react_hot_toast_1 = require("react-hot-toast");
var axios_1 = require("axios");
var navigation_1 = require("next/navigation");
var react_1 = require("react");
var Container_1 = require("../components/Container");
var Heading_1 = require("../components/Heading");
var ListingCard_1 = require("../components/listings/ListingCard");
var ReservationsClient = function (_a) {
    var reservations = _a.reservations, currentUser = _a.currentUser;
    var router = navigation_1.useRouter();
    var _b = react_1.useState(""), deletingId = _b[0], setDeletingId = _b[1];
    var onCancel = react_1.useCallback(function (id) {
        setDeletingId(id);
        axios_1["default"]["delete"]("/api/reservations/" + id)
            .then(function () {
            react_hot_toast_1["default"].success("Reservation cancelled");
            router.refresh();
        })["catch"](function (error) {
            var _a, _b;
            react_hot_toast_1["default"].error(((_b = (_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.error) || "Something went wrong");
        })["finally"](function () {
            setDeletingId("");
        });
    }, [router]);
    return (React.createElement(Container_1["default"], null,
        React.createElement(Heading_1["default"], { title: "Reservations", subtitle: "Bookings on your properties" }),
        React.createElement("div", { className: "\r\n        mt-10 \r\n        grid \r\n        grid-cols-1\r\n        sm:grid-cols-2\r\n        md:grid-cols-3\r\n        lg:grid-cols-4\r\n        xl:grid-cols-5\r\n        \r\n        gap-8\r\n        " }, reservations.map(function (reservation) { return (React.createElement(ListingCard_1["default"], { key: reservation.id, data: reservation.listing, reservation: reservation, actionId: reservation.id, onAction: onCancel, disabled: deletingId === reservation.id, actionLabel: "Cancel guest reservation", currentUser: currentUser })); }))));
};
exports["default"] = ReservationsClient;
