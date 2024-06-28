"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateSortOrder = exports.logLevel = exports.ITokenPayload = exports.UserStatus = exports.Role = void 0;
var Role;
(function (Role) {
    Role["ADMIN"] = "admin";
    Role["SUB_ADMIN"] = "sub_admin";
    Role["TEACHER"] = "teacher";
    Role["STUDENT"] = "student";
})(Role = exports.Role || (exports.Role = {}));
var UserStatus;
(function (UserStatus) {
    UserStatus["INVITED"] = "invited";
    UserStatus["ACTIVE"] = "active";
    UserStatus["INACTIVE"] = "inactive";
})(UserStatus = exports.UserStatus || (exports.UserStatus = {}));
var ITokenPayload;
(function (ITokenPayload) {
    ITokenPayload["USER"] = "user";
    ITokenPayload["ROLE"] = "role";
    ITokenPayload["TOKEN"] = "token";
})(ITokenPayload = exports.ITokenPayload || (exports.ITokenPayload = {}));
var logLevel;
(function (logLevel) {
    logLevel[logLevel["NOTHING"] = 0] = "NOTHING";
    logLevel[logLevel["ERROR"] = 1] = "ERROR";
    logLevel[logLevel["WARN"] = 2] = "WARN";
    logLevel[logLevel["INFO"] = 4] = "INFO";
    logLevel[logLevel["DEBUG"] = 5] = "DEBUG";
})(logLevel = exports.logLevel || (exports.logLevel = {}));
var DateSortOrder;
(function (DateSortOrder) {
    DateSortOrder["ASCENDING"] = "ascending";
    DateSortOrder["DESCENDING"] = "descending";
})(DateSortOrder = exports.DateSortOrder || (exports.DateSortOrder = {}));
//# sourceMappingURL=enum.js.map