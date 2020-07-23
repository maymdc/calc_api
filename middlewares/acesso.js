"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verificaAcesso = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function verificaAcesso(request, response, next) {
    var xAccessToken = request.headers['x-access-token'];
    if (xAccessToken === undefined) {
        return response.status(403).json({
            message: 'Acesso negado, token nao informado'
        });
    }
    jsonwebtoken_1.default.verify(String(xAccessToken), 'Tururu', function (negado, autorizado) {
        if (negado) {
            return response.status(403).json({
                message: 'Acesso negado, token invalido'
            });
        }
        next();
    });
}
exports.verificaAcesso = verificaAcesso;
