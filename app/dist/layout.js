"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.metadata = exports.dynamic = void 0;
exports.dynamic = "force-dynamic";
require("./globals.css");
var google_1 = require("next/font/google");
var Navbar_1 = require("@/app/components/navbar/Navbar");
var RegisterModal_1 = require("@/app/components/modals/RegisterModal");
var LoginModal_1 = require("@/app/components/modals/LoginModal");
var ToasterProvider_1 = require("@/app/providers/ToasterProvider");
var getCurrentUser_1 = require("./actions/getCurrentUser");
var RentModal_1 = require("@/app/components/modals/RentModal");
var SearchModal_1 = require("@/app/components/modals/SearchModal");
var font = google_1.Poppins({ subsets: ["latin"], weight: "300" });
exports.metadata = {
    title: "Home 4U",
    description: "Your online one-stop shop for finding properties"
};
function RootLayout(_a) {
    var children = _a.children;
    return __awaiter(this, void 0, void 0, function () {
        var currentUser;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, getCurrentUser_1["default"]()];
                case 1:
                    currentUser = _b.sent();
                    return [2 /*return*/, (React.createElement("html", { lang: "en" },
                            React.createElement("body", { className: font.className },
                                React.createElement(ToasterProvider_1["default"], null),
                                React.createElement(SearchModal_1["default"], null),
                                React.createElement(RentModal_1["default"], null),
                                React.createElement(LoginModal_1["default"], null),
                                React.createElement(RegisterModal_1["default"], null),
                                React.createElement(Navbar_1["default"], { currentUser: currentUser }),
                                React.createElement("div", { className: "pb-20 pt-28" }, children))))];
            }
        });
    });
}
exports["default"] = RootLayout;
