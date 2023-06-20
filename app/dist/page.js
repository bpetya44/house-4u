"use strict";
exports.__esModule = true;
var Container_1 = require("./components/Container");
var EmptyState_1 = require("./components/EmptyState");
function Home() {
    var isEmpty = true;
    if (isEmpty) {
        return React.createElement(EmptyState_1["default"], { showReset: true });
    }
    return (React.createElement(Container_1["default"], null,
        React.createElement("div", { className: "\n          pt-24\n          grid\n          drid-cols-1 \n          sm:grid-cols-2 \n          md:grid-cols-3 \n          lg:grid-cols-4 \n          xl:grid-cols-5\n          2xl:grid-cols-6\n          gap-8\n          " },
            React.createElement("div", null, "My Feature Listings"))));
}
exports["default"] = Home;
