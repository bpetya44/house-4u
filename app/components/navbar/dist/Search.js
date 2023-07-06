"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var useCountries_1 = require("@/app/hooks/useCountries");
var useSearchModal_1 = require("@/app/hooks/useSearchModal");
var navigation_1 = require("next/navigation");
var bi_1 = require("react-icons/bi");
var date_fns_1 = require("date-fns");
var Search = function () {
    var searchModal = useSearchModal_1["default"]();
    var params = navigation_1.useSearchParams();
    var getByValue = useCountries_1["default"]().getByValue;
    var locationValue = params === null || params === void 0 ? void 0 : params.get("locationValue");
    var startDate = params === null || params === void 0 ? void 0 : params.get("startDate");
    var endDate = params === null || params === void 0 ? void 0 : params.get("endDate");
    var guestCount = params === null || params === void 0 ? void 0 : params.get("guestCount");
    var locationLabel = react_1.useMemo(function () {
        var _a;
        if (!locationValue)
            return "Anywhere";
        return (_a = getByValue(locationValue)) === null || _a === void 0 ? void 0 : _a.label;
    }, [locationValue, getByValue]);
    var durationLabel = react_1.useMemo(function () {
        if (startDate && endDate) {
            var start_1 = new Date(startDate);
            var end = new Date(endDate);
            var diff = date_fns_1.differenceInDays(end, start_1);
            if (diff === 0) {
                diff = 1;
            }
            return diff + " Day" + (diff > 1 ? "s" : "");
        }
        return "Any week";
    }, [startDate, endDate]);
    var guestLabel = react_1.useMemo(function () {
        if (!guestCount)
            return "Add Guests";
        return guestCount + " Guest" + (+guestCount > 1 ? "s" : "");
    }, [guestCount]);
    return (React.createElement("div", { onClick: searchModal.onOpen, className: "\r\n    border-2\r\n    border-gray-200\r\n    w-full\r\n    md:w-auto\r\n    rounded-full\r\n    shadow-sm\r\n    hover:shadow-md\r\n    transition\r\n    cursor-pointer\r\n\r\n  " },
        React.createElement("div", { className: "\r\n        flex\r\n        flex-row\r\n        items-center\r\n        justify-between\r\n       \r\n    " },
            React.createElement("div", { className: "\r\n          text-sm\r\n          font-semibold\r\n          px-6\r\n        " }, locationLabel),
            React.createElement("div", { className: "\r\n          hidden\r\n          sm:block\r\n          text-sm\r\n          font-semibold\r\n          px-6\r\n          border-x-2\r\n          flex-1\r\n          text-center\r\n        " }, durationLabel),
            React.createElement("div", { className: "\r\n        text-sm\r\n         pl-6\r\n         pr-2\r\n         text-gray-600\r\n         flex\r\n         flex-row\r\n          items-center\r\n          gap-3\r\n         " },
                React.createElement("div", { className: "hidden sm:block" }, guestLabel),
                React.createElement("div", { className: "\r\n            p-2\r\n            bg-purple-500\r\n            rounded-full\r\n            text-white\r\n            hover:bg-purple-600\r\n            m-1\r\n          " },
                    React.createElement(bi_1.BiSearch, { size: 16 }))))));
};
exports["default"] = Search;
