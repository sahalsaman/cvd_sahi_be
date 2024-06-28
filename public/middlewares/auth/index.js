"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiAccess = void 0;
const contants_1 = require("../../types/variables/contants");
const apiAccess = (roles) => {
    return (req, res, next) => {
        const token = req.headers['Authorization'] || req.headers['authorization'];
        if (!token)
            return res.status(401).send(contants_1.errorMessage[401]);
        else {
            // farebase.verifyToken(token).then((decodedToken) => {
            //     const payload: ITokenPayload = decodedToken
            //     req.payload = payload;
            //     if (!roles || !roles.length || roles.includes(payload.role)) next();
            //     else return res.status(401).send(errorMessage[401]);
            // }).catch(() => res.status(401).send(errorMessage[401]))
        }
    };
};
exports.apiAccess = apiAccess;
//# sourceMappingURL=index.js.map