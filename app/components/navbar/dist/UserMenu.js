"use client";
"use strict";
exports.__esModule = true;
var navigation_1 = require("next/navigation");
var ai_1 = require("react-icons/ai");
var Avatar_1 = require("../Avatar");
var react_1 = require("react");
var MenuItem_1 = require("./MenuItem");
var useRegisterModal_1 = require("@/app/hooks/useRegisterModal");
var useLoginModal_1 = require("@/app/hooks/useLoginModal");
var useRentModal_1 = require("@/app/hooks/useRentModal");
var react_2 = require("next-auth/react");
var UserMenu = function (_a) {
    var currentUser = _a.currentUser;
    var router = navigation_1.useRouter();
    var registerModal = useRegisterModal_1.useRegisterModal();
    var loginModal = useLoginModal_1.useLoginModal();
    var rentModal = useRentModal_1.useRentModal();
    var _b = react_1.useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var toggleOpen = react_1.useCallback(function () {
        setIsOpen(function (value) { return !value; });
    }, []);
    var onRent = react_1.useCallback(function () {
        if (!currentUser) {
            return loginModal.onOpen();
        }
        //open rent modal
        rentModal.onOpen();
    }, [currentUser, loginModal, rentModal]);
    return (React.createElement("div", { className: "\r\n        relative\r\n            " },
        React.createElement("div", { className: "flex flex-row items-center gap-2" },
            React.createElement("div", { onClick: onRent, className: "\r\n            hidden\r\n            md:block\r\n            text-sm\r\n            font-semibold\r\n            py-3\r\n            px-4\r\n            rounded-full\r\n            hover:bg-gray-100\r\n            transition\r\n            cursor-pointer\r\n            " }, "Your Home"),
            React.createElement("div", { onClick: toggleOpen, className: "\r\n        p-3\r\n        md:py-1\r\n        md:px-2\r\n        border-[1px]\r\n        border-neutral-200\r\n        flex\r\n        flex-row\r\n        items-center\r\n        gap-2\r\n        rounded-full\r\n        hover:shadow-md\r\n        transition\r\n        cursor-pointer\r\n        " },
                React.createElement(ai_1.AiOutlineMenu, null),
                React.createElement("div", { className: "hidden md:block" },
                    React.createElement(Avatar_1["default"], { src: currentUser === null || currentUser === void 0 ? void 0 : currentUser.image })))),
        isOpen && (React.createElement("div", { className: "absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm" },
            React.createElement("div", { className: "flex flex-col cursor-pointer" }, currentUser ? (React.createElement(React.Fragment, null,
                React.createElement(MenuItem_1["default"], { onClick: function () {
                        router.push("/trips");
                    }, label: "My trips" }),
                React.createElement(MenuItem_1["default"], { onClick: function () { }, label: "My favourites" }),
                React.createElement(MenuItem_1["default"], { onClick: function () { }, label: "My reservations" }),
                React.createElement(MenuItem_1["default"], { onClick: function () { }, label: "My properties" }),
                React.createElement(MenuItem_1["default"], { onClick: rentModal.onOpen, label: "Your Home" }),
                React.createElement("hr", null),
                React.createElement(MenuItem_1["default"], { onClick: function () { return react_2.signOut(); }, label: "Logout" }))) : (React.createElement(React.Fragment, null,
                React.createElement(MenuItem_1["default"], { onClick: loginModal.onOpen, label: "Login" }),
                React.createElement(MenuItem_1["default"], { onClick: registerModal.onOpen, label: "Sign Up" }))))))));
};
exports["default"] = UserMenu;
