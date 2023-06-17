"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var ai_1 = require("react-icons/ai");
var Counter = function (_a) {
    var title = _a.title, subtitle = _a.subtitle, value = _a.value, onChange = _a.onChange;
    var onAdd = react_1.useCallback(function () {
        onChange(value + 1);
    }, [onChange, value]);
    var onReduce = react_1.useCallback(function () {
        if (value === 1)
            return;
        onChange(value - 1);
    }, [onChange, value]);
    return (React.createElement("div", { className: "flex flex-row items-center justify-between" },
        React.createElement("div", { className: "flex flex-col" },
            React.createElement("div", { className: "font-medium" }, title),
            React.createElement("div", { className: "font-light text-sm text-neutral-500" }, subtitle)),
        React.createElement("div", { className: "flex flex-row items-center gap-4" },
            React.createElement("div", { onClick: onReduce, className: "\r\n                    w-10\r\n                    h-10\r\n                    rounded-full\r\n                    border-[1px]\r\n                    border-purple-200\r\n                    bg-purple-100\r\n                    flex\r\n                    items-center\r\n                    justify-center\r\n                    cursor-pointer\r\n                    text-purple-600\r\n                    hover:opacity-80\r\n                    transition\r\n                    " },
                React.createElement(ai_1.AiOutlineMinus, { size: 20 })),
            React.createElement("div", { className: "font-semibold text-lg" }, value),
            React.createElement("div", { onClick: onAdd, className: "\r\n                    w-10\r\n                    h-10\r\n                    rounded-full\r\n                    border-[1px]\r\n                    border-purple-200\r\n                    bg-purple-100\r\n                    flex\r\n                    items-center\r\n                    justify-center\r\n                    cursor-pointer\r\n                    text-purple-600\r\n                    hover:opacity-80\r\n                    transition\r\n                    " },
                React.createElement(ai_1.AiOutlinePlus, { size: 20 })))));
};
exports["default"] = Counter;
