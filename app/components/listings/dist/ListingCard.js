"use client";
"use strict";
exports.__esModule = true;
var navigation_1 = require("next/navigation");
var useCountries_1 = require("@/app/hooks/useCountries");
var react_1 = require("react");
var image_1 = require("next/image");
var date_fns_1 = require("date-fns");
var HeartButton_1 = require("../HeartButton");
var Button_1 = require("../Button");
var ListingCard = function (_a) {
    var data = _a.data, reservation = _a.reservation, onAction = _a.onAction, disabled = _a.disabled, actionLabel = _a.actionLabel, _b = _a.actionId, actionId = _b === void 0 ? "" : _b, currentUser = _a.currentUser;
    var router = navigation_1.useRouter();
    var getByValue = useCountries_1["default"]().getByValue;
    var location = getByValue(data.locationValue);
    var handleCancel = react_1.useCallback(function (e) {
        e.stopPropagation();
        if (disabled) {
            return;
        }
        onAction === null || onAction === void 0 ? void 0 : onAction(actionId);
    }, [actionId, onAction, disabled]);
    var price = react_1.useMemo(function () {
        if (reservation) {
            return reservation.totalPrice;
        }
        return data.price;
    }, [reservation, data.price]);
    var reservationDate = react_1.useMemo(function () {
        if (!reservation) {
            return null;
        }
        var start = new Date(reservation.startDate);
        var end = new Date(reservation.endDate);
        return date_fns_1.format(start, "PP") + " - " + date_fns_1.format(end, "PP");
    }, [reservation]);
    return (React.createElement("div", { onClick: function () { return router.push("/listings/" + data.id); }, className: "\r\n            col-span-1\r\n            cursor-pointer\r\n            group\r\n        " },
        React.createElement("div", { className: "flex flex-col gap-2 w-full" },
            React.createElement("div", { className: "aspect-square w-full relative overflow-hidden rounded-xl" },
                React.createElement(image_1["default"], { fill: true, alt: "Listing", src: data.imageSrc, className: "\r\n                    object-cover\r\n                    h-full\r\n                    w-full\r\n                    group-hover:scale-110\r\n                    transition-transform\r\n                    " }),
                React.createElement("div", { className: "absolute top-3 right-3" },
                    React.createElement(HeartButton_1["default"], { listingId: data.id, currentUser: currentUser }))),
            React.createElement("div", { className: "font-semibold text-lg" }, location === null || location === void 0 ? void 0 :
                location.region,
                ", ", location === null || location === void 0 ? void 0 :
                location.label),
            React.createElement("div", { className: "font-light text-gray-500" }, reservationDate || data.category),
            React.createElement("div", { className: "flex flex-row items-center gap-1" },
                React.createElement("div", { className: "font-semibold" },
                    "$ ",
                    price),
                !reservation && React.createElement("div", { className: "font-light" }, "night")),
            onAction && actionLabel && (React.createElement(Button_1["default"], { disabled: disabled, small: true, label: actionLabel, onClick: handleCancel })))));
};
exports["default"] = ListingCard;
