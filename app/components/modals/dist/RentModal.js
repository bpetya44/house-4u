"use client";
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
var ImageUpload_1 = require("../inputs/ImageUpload");
var Input_1 = require("../inputs/Input");
var axios_1 = require("axios");
var react_hot_toast_1 = require("react-hot-toast");
var navigation_1 = require("next/navigation");
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
    var router = navigation_1.useRouter();
    var rentModal = useRentModal_1.useRentModal();
    var _a = react_1.useState(STEPS.CATEGORY), step = _a[0], setStep = _a[1];
    var _b = react_1.useState(false), isLoading = _b[0], setIsLoading = _b[1];
    var _c = react_hook_form_1.useForm({
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
    }), register = _c.register, handleSubmit = _c.handleSubmit, setValue = _c.setValue, watch = _c.watch, errors = _c.formState.errors, reset = _c.reset;
    var category = watch("category");
    var location = watch("location");
    var guestCount = watch("guestCount");
    var roomCount = watch("roomCount");
    var bathroomCount = watch("bathroomCount");
    var imageSrc = watch("imageSrc");
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
    var onSubmit = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (step !== STEPS.PRICE) {
                return [2 /*return*/, onNext()];
            }
            setIsLoading(true);
            axios_1["default"]
                .post("/api/listings", data)
                .then(function () {
                react_hot_toast_1.toast.success("Listing created!");
                router.refresh();
                reset();
                setStep(STEPS.CATEGORY);
                rentModal.onClose();
            })["catch"](function () {
                react_hot_toast_1.toast.error("Something went wrong!");
            })["finally"](function () {
                setIsLoading(false);
            });
            return [2 /*return*/];
        });
    }); };
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
    //Step 4 - Images
    if (step === STEPS.IMAGES) {
        bodyContent = (React.createElement("div", { className: "flex flex-col gap-8" },
            React.createElement(Heading_1["default"], { title: "Add some images of your place", subtitle: "Show guests what your place looks like!" }),
            React.createElement(ImageUpload_1["default"], { value: imageSrc, onChange: function (value) { return setCustomValue("imageSrc", value); } })));
    }
    //Step 5 - Description
    if (step === STEPS.DESCRIPTION) {
        bodyContent = (React.createElement("div", { className: "flex flex-col gap-8" },
            React.createElement(Heading_1["default"], { title: "Describe your place", subtitle: "Write a short description" }),
            React.createElement(Input_1["default"], { id: "title", label: "Title", disabled: isLoading, errors: errors, register: register, required: true }),
            React.createElement("hr", null),
            React.createElement(Input_1["default"], { id: "description", label: "Description", disabled: isLoading, errors: errors, register: register, required: true })));
    }
    if (step === STEPS.PRICE) {
        bodyContent = (React.createElement("div", { className: "flex flex-col gap-8" },
            React.createElement(Heading_1["default"], { title: "Set a price per night", subtitle: "How much do you want to charge?" }),
            React.createElement(Input_1["default"], { id: "price", label: "Price per night", type: "number", formatPrice: true, disabled: isLoading, errors: errors, register: register, required: true })));
    }
    return (React.createElement(Modal_1["default"], { isOpen: rentModal.isOpen, onClose: rentModal.onClose, onSubmit: handleSubmit(onSubmit), actionLabel: actionLabel, secondaryActionLabel: secondaryActionLabel, secondaryAction: step === STEPS.CATEGORY ? undefined : onBack, title: "Your property", body: bodyContent }));
};
exports["default"] = exports.RentModal;
