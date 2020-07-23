"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//esse arquivo controla as rotas
var express_1 = __importDefault(require("express"));
var opFundamentais_1 = __importDefault(require("./controllers/opFundamentais"));
var operacoes_1 = __importDefault(require("./controllers/operacoes"));
var admin_1 = __importDefault(require("./controllers/admin"));
var acesso_1 = require("./middlewares/acesso");
var routes = express_1.default.Router();
var opFundamentais = new opFundamentais_1.default();
var operacoes = new operacoes_1.default();
var admin = new admin_1.default();
// /:localhost:3333 - servidor
routes.get('/', function (request, response) {
    //return response.send('Deu certo'); //NÃO RECOMENDADO!! é SO UM TESTE
    return response.status(200).json({
        message: 'Calculadora API',
        autor: 'Mayara Mendes'
    });
});
routes.post('/', function (request, response) {
    return response.status(200).json({
        message: 'Servidor online - post'
    });
});
routes.post('/login', admin.login);
//localhost:3333/operacoes/fundamentais/{operacao}?num1=10&num2=15
//ROTAS PUBLICAS
routes.get('/operacoes/fundamentais/somar', opFundamentais.somar);
routes.post('/operacoes/fundamentais/somar', opFundamentais.somar);
routes.get('/operacoes/fundamentais/subtrair', opFundamentais.subtrair);
routes.post('/operacoes/fundamentais/subtrair', opFundamentais.subtrair);
routes.get('/operacoes/fundamentais/multiplicar', opFundamentais.multiplicar);
routes.post('/operacoes/fundamentais/multiplicar', opFundamentais.multiplicar);
routes.get('/operacoes/fundamentais/dividir', opFundamentais.dividir);
routes.post('/operacoes/fundamentais/dividir', opFundamentais.dividir);
//ROTAS PRIVADAS
routes.get('/operacoes/delta', acesso_1.verificaAcesso, operacoes.delta);
routes.get('/operacoes/fatorial', acesso_1.verificaAcesso, operacoes.fatorial);
exports.default = routes; //exportacao padrao. Exportando o controlador de rota
