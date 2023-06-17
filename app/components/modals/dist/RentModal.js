"use client";
"use strict";
exports.__esModule = true;
exports.RentModal = void 0;
var react_1 = require("react");
var Modal_1 = require("./Modal");
var useRentModal_1 = require("@/app/hooks/useRentModal");
var Heading_1 = require("../Heading");
var Categories_1 = require("../navbar/Categories");
var CategoryInput_1 = require("../inputs/CategoryInput");
var react_hook_form_1 = require("react-hook-form");
var CountrySelect_1 = require("../inputs/CountrySelect");
var dynamic_1 = require("next/dynamic");
var Counter_1 = require("../inputs/Counter");
var STEPS;
(function (STEPS) {
    STEPS[STEPS["CATEGORY"] = 0] = "CATEGORY";
    STEPS[STEPS["LOCATION"] = 1] = "LOCATION";
    STEPS[STEPS["INFO"] = 2] = "INFO";
    STEPS[STEPS["IMAGES"] = 3] = "IMAGES";
    STEPS[STEPS["DESCRIPTION"] = 4] = "DESCRIPTION";
    STEPS[STEPS["PRICE"] = 5] = "PRICE";
})(STEPS || (STEPS = {}));
exports.RentModal = function () {
    var rentModal = useRentModal_1.useRentModal();
    var _a = react_1.useState(STEPS.CATEGORY), step = _a[0], setStep = _a[1];
    var _b = react_hook_form_1.useForm({
        defaultValues: {
            category: "",
            location: null,
            guestCount: 1,
            roomCount: 1,
            bathroomCount: 1,
            imageSrc: "",
            price: 1,
            title: "",
            description: ""
        }
    }), register = _b.register, handleSubmit = _b.handleSubmit, setValue = _b.setValue, watch = _b.watch, errors = _b.formState.errors, reset = _b.reset;
    var category = watch("category");
    var location = watch("location");
    var guestCount = watch("guestCount");
    var roomCount = watch("roomCount");
    var bathroomCount = watch("bathroomCount");
    var Map = react_1.useMemo(function () {
        return dynamic_1["default"](function () { return Promise.resolve().then(function () { return require("../Map"); }); }, {
            ssr: false
        });
    }, [location]);
    var setCustomValue = function (id, value) {
        setValue(id, value, {
            shouldValidate: true,
            shouldDirty: true,
            shouldTouch: true
        });
    };
    var onBack = function () {
        setStep(function (value) { return value - 1; });
    };
    var onNext = function () {
        setStep(function (value) { return value + 1; });
    };
    var actionLabel = react_1.useMemo(function () {
        if (step === STEPS.PRICE) {
            return "Create";
        }
        return "Next";
    }, [step]);
    var secondaryActionLabel = react_1.useMemo(function () {
        if (step === STEPS.CATEGORY) {
            return undefined;
        }
        return "Back";
    }, [step]);
    var bodyContent = (React.createElement("div", { className: "flex flex-col gap-8" },
        React.createElement(Heading_1["default"], { title: "Which of these best describes your place?", subtitle: "Pick a category" }),
        React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[50vh] overflow-y-auto" }, Categories_1.categories.map(function (item) { return (React.createElement("div", { key: item.label, className: "col-span-1 text-purple-700" },
            React.createElement(CategoryInput_1["default"], { onClick: function (category) { return setCustomValue("category", category); }, selected: category === item.label, label: item.label, icon: item.icon }))); }))));
    //Step 2 - Location
    if (step === STEPS.LOCATION) {
        bodyContent = (React.createElement("div", { className: "flex flex-col gap-8" },
            React.createElement(Heading_1["default"], { title: "Where's your place located?", subtitle: "Pick a location" }),
            React.createElement(CountrySelect_1["default"], { value: location, onChange: function (value) { return setCustomValue("location", value); } }),
            React.createElement(Map, { center: location === null || location === void 0 ? void 0 : location.latlng })));
    }
    //Step 3 - Info
    if (step === STEPS.INFO) {
        bodyContent = (React.createElement("div", { className: "flex flex-col gap-8" },
            React.createElement(Heading_1["default"], { title: "Share some info about your place", subtitle: "What amenities do you offer?" }),
            React.createElement(Counter_1["default"], { title: "Guests", subtitle: "How many guests can you accomodate?", value: guestCount, onChange: function (value) { return setCustomValue("guestCount", value); } }),
            React.createElement("hr", null),
            React.createElement(Counter_1["default"], { title: "Rooms", subtitle: "How many rooms do you have?", value: roomCount, onChange: function (value) { return setCustomValue("roomCount", value); } }),
            React.createElement("hr", null),
            React.createElement(Counter_1["default"], { title: "Bathrooms", subtitle: "How many bathrooms do you have?", value: bathroomCount, onChange: function (value) { return setCustomValue("bathroomCount", value); } })));
    }
    return (React.createElement(Modal_1["default"], { isOpen: rentModal.isOpen, onClose: rentModal.onClose, onSubmit: onNext, actionLabel: actionLabel, secondaryActionLabel: secondaryActionLabel, secondaryAction: step === STEPS.CATEGORY ? undefined : onBack, title: "Rent out your property", body: bodyContent }));
};
exports["default"] = exports.RentModal;