"use client";
"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var ai_1 = require("react-icons/ai");
var fc_1 = require("react-icons/fc");
var react_1 = require("react");
var react_hook_form_1 = require("react-hook-form");
var react_2 = require("next-auth/react");
var useRegisterModal_1 = require("@/app/hooks/useRegisterModal");
var useLoginModal_1 = require("@/app/hooks/useLoginModal");
var Modal_1 = require("./Modal");
var Heading_1 = require("../Heading");
var Input_1 = require("../inputs/Input");
var react_hot_toast_1 = require("react-hot-toast");
var Button_1 = require("../Button");
var RegisterModal = function () {
    var registerModal = useRegisterModal_1["default"]();
    var loginModal = useLoginModal_1["default"]();
    var _a = react_1.useState(false), isLoading = _a[0], setIsLoading = _a[1];
    var _b = react_hook_form_1.useForm({
        defaultValues: {
            name: "",
            email: "",
            password: ""
        }
    }), register = _b.register, handleSubmit = _b.handleSubmit, errors = _b.formState.errors;
    var onSubmit = function (data) {
        setIsLoading(true);
        axios_1["default"]
            .post("/api/register", data)
            .then(function () {
            react_hot_toast_1.toast.success("Account created successfully!");
            registerModal.onClose();
            loginModal.onOpen();
        })["catch"](function (error) {
            react_hot_toast_1.toast.error("Something went wrong!");
        })["finally"](function () {
            setIsLoading(false);
        });
    };
    var toggle = react_1.useCallback(function () {
        registerModal.onClose();
        loginModal.onOpen();
    }, [registerModal, loginModal]);
    //   BODY CONTENT
    var bodyContent = (React.createElement("div", { className: "flex flex-col gap-4" },
        React.createElement(Heading_1["default"], { center: true, title: "Welcome to Home 4U", subtitle: "Create an account" }),
        React.createElement(Input_1["default"], { id: "email", label: "Email", disabled: isLoading, register: register, errors: errors, required: true }),
        React.createElement(Input_1["default"], { id: "name", label: "Name", disabled: isLoading, register: register, errors: errors, required: true }),
        React.createElement(Input_1["default"], { id: "password", type: "password", label: "Password", disabled: isLoading, register: register, errors: errors, required: true })));
    //FOOTER CONTENT
    var footerContent = (React.createElement("div", { className: "flex flex-col gap-4 mt-3" },
        React.createElement("hr", null),
        React.createElement(Button_1["default"], { outline: true, label: "Continue with Google", icon: fc_1.FcGoogle, onClick: function () { return react_2.signIn("google"); } }),
        React.createElement(Button_1["default"], { outline: true, label: "Continue with Github", icon: ai_1.AiFillGithub, onClick: function () { return react_2.signIn("github"); } }),
        React.createElement("div", { className: "text-neutral-500 text-center mt-4 font-light" },
            React.createElement("div", { className: "flex flex-row items-center gap-2 justify-center" },
                React.createElement("div", null, "Already have an account?"),
                React.createElement("div", { className: "text-neutral-800 cursor-pointer hover:underline hover:text-purple-500", onClick: toggle }, "Log in")))));
    return (React.createElement(Modal_1["default"], { disabled: isLoading, isOpen: registerModal.isOpen, title: "Register", actionLabel: "Continue", onClose: registerModal.onClose, onSubmit: handleSubmit(onSubmit), body: bodyContent, footer: footerContent }));
};
exports["default"] = RegisterModal;
