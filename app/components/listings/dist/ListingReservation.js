"use client";
"use strict";
exports.__esModule = true;
var Calendar_1 = require("../inputs/Calendar");
var ListingReservation = function (_a) {
    var price = _a.price, dateRange = _a.dateRange, totalPrice = _a.totalPrice, onChangeDate = _a.onChangeDate, onSubmit = _a.onSubmit, disabledDates = _a.disabledDates, disabled = _a.disabled;
    return (React.createElement("div", { className: "\r\n      bg-white\r\n      rounded-xl\r\n      border-[1px]\r\n      border-neutral-200\r\n      overflow-hidden\r\n      " },
        React.createElement("div", { className: "flex flex-row items-center gap-1 p-4" },
            React.createElement("div", { className: "text-2xl font-semibold text-purple-700" },
                "$ ",
                price),
            React.createElement("div", { className: "text-neutral-500 font-light" }, "/ night")),
        React.createElement("hr", null),
        React.createElement(Calendar_1["default"], { value: dateRange, disabledDates: disabledDates, onChange: function (value) { return onChangeDate(value.selection); } })));
};
exports["default"] = ListingReservation;
