"use client";
"use strict";
exports.__esModule = true;
var react_date_range_1 = require("react-date-range");
require("react-date-range/dist/styles.css"); // main style file
require("react-date-range/dist/theme/default.css"); // theme css file
var Calendar = function (_a) {
    var value = _a.value, onChange = _a.onChange, _b = _a.disabledDates, disabledDates = _b === void 0 ? [] : _b;
    return (React.createElement(react_date_range_1.DateRange, { rangeColors: ["#7B61FF"], ranges: [value], date: new Date(), onChange: onChange, direction: "vertical", showDateDisplay: false, minDate: new Date(), disabledDates: disabledDates }));
};
exports["default"] = Calendar;
