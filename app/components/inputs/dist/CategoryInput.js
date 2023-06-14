"use client";
"use strict";
exports.__esModule = true;
var CategoryInput = function (_a) {
    var Icon = _a.icon, label = _a.label, selected = _a.selected, onClick = _a.onClick;
    return (React.createElement("div", { onClick: function () { return onClick(label); }, className: "\n    rounded-xl\n    border-2\n    border-purple-200\n    p-4\n    flex\n    flex-col\n    items-center\n    gap-3\n    hover:border-purple-700\n    hover:bg-purple-50\n    transition\n    cursor-pointer\n    " + (selected ? "bg-purple-100" : "border-transparent") + "\n    " },
        React.createElement(Icon, { size: 32 }),
        React.createElement("div", { className: "font-semibold" }, label)));
};
exports["default"] = CategoryInput;
