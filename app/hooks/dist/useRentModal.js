"use strict";
exports.__esModule = true;
exports.useRentModal = void 0;
var zustand_1 = require("zustand");
exports.useRentModal = zustand_1.create(function (set) { return ({
    isOpen: false,
    onOpen: function () { return set({ isOpen: true }); },
    onClose: function () { return set({ isOpen: false }); }
}); });
exports["default"] = exports.useRentModal;
