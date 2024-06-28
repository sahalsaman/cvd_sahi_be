"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageNumberSanitizer = exports.bodyRequiredDataValidator = void 0;
const bodyRequiredDataValidator = (body, fields) => {
    let required = [];
    fields.forEach((key) => {
        if ([undefined, '', null].includes(body[key])) {
            required.push(key);
        }
    });
    return required.length ? { "missing": required } : undefined;
};
exports.bodyRequiredDataValidator = bodyRequiredDataValidator;
const PageNumberSanitizer = (page) => {
    return isNaN(Number(page)) ? 1 : Number(page);
};
exports.PageNumberSanitizer = PageNumberSanitizer;
//# sourceMappingURL=validator.js.map