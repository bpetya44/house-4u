"use client";
"use strict";
exports.__esModule = true;
var next_cloudinary_1 = require("next-cloudinary");
var image_1 = require("next/image");
var react_1 = require("react");
var tb_1 = require("react-icons/tb");
var ImageUpload = function (_a) {
    var onChange = _a.onChange, value = _a.value;
    var handleUpload = react_1.useCallback(function (result) {
        onChange(result.info.secure_url);
    }, [onChange]);
    return (React.createElement(next_cloudinary_1.CldUploadWidget, { onUpload: handleUpload, uploadPreset: "fux7gpt7", options: {
            maxFiles: 1
        } }, function (_a) {
        var open = _a.open;
        return (React.createElement("div", { onClick: function () { return open === null || open === void 0 ? void 0 : open(); }, className: "\r\n                relative\r\n                cursor-pointer\r\n                hover:opacity-70\r\n                transition\r\n                border-2\r\n                border-dashed\r\n                border-neutral-200\r\n                p-20\r\n                flex\r\n                flex-col\r\n                items-center\r\n                justify-center\r\n                rounded-xl\r\n                gap-4\r\n                text-neutral-600\r\n                " },
            React.createElement(tb_1.TbPhotoPlus, { size: 32 }),
            React.createElement("div", { className: "text-sm text-center font-semibold" }, "Click to upload"),
            value && (React.createElement("div", { className: "absolute inset-0 w-full h-full" },
                React.createElement(image_1["default"], { alt: "upload", fill: true, src: value, layout: "fill", objectFit: "cover", className: "rounded-xl" })))));
    }));
};
exports["default"] = ImageUpload;
