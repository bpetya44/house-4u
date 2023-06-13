"use client";
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var navigation_1 = require("next/navigation");
var react_1 = require("react");
var query_string_1 = require("query-string");
var CategoryBox = function (_a) {
    var Icon = _a.icon, label = _a.label, selected = _a.selected;
    var router = navigation_1.useRouter();
    var params = navigation_1.useSearchParams();
    //handle click on category
    var handleClick = react_1.useCallback(function () {
        //console.log("clicked on category", label);
        //get current query
        var currentQuery = {};
        if (params) {
            //convert to object
            currentQuery = query_string_1["default"].parse(params.toString());
        }
        //update query with category label
        var updatedQuery = __assign(__assign({}, currentQuery), { category: label });
        //if category is already selected, remove it, otherwise will add it, like a toggle
        if ((params === null || params === void 0 ? void 0 : params.get("category")) === label) {
            delete updatedQuery.category;
        }
        //generate the url with the updated query
        var url = query_string_1["default"].stringifyUrl({
            url: "/",
            query: updatedQuery
        }, { skipNull: true });
        router.push(url);
    }, [label, params, router]);
    return (React.createElement("div", { onClick: handleClick, className: "flex flex-col items-center justify-center gap-2 p-3 border-b-4 hover:text-purple-700 transition cursor-pointer \n  " + (selected
            ? "text-purple-700 border-b-purple-700"
            : "text-neutral-500 border-transparent") + "\n  " },
        React.createElement(Icon, { size: 26 }),
        React.createElement("div", { className: "font-medium text-sm" }, label)));
};
exports["default"] = CategoryBox;
