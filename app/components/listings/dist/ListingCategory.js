"use client";
"use strict";
exports.__esModule = true;
var ListingCategory = function (_a) {
    var Icon = _a.icon, label = _a.label, description = _a.description;
    return (React.createElement("div", { className: "flex flex-col gap-6" },
        React.createElement("div", { className: "flex flex-row items-center gap-4" },
            React.createElement(Icon, { size: 40, className: "text-purple-700" }),
            React.createElement("div", { className: "flex flex-col" },
                React.createElement("div", { className: "text-lg font-semibold" }, label),
                React.createElement("div", { className: "text-neutral-500 font-light" }, description)))));
};
exports["default"] = ListingCategory;
