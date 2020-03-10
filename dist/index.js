"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*git commit -m "first commit"
git remote add origin git@github.com:ErikGarfia/REST-API.git
git push -u origin master*/
var express_1 = __importDefault(require("express"));
require("reflect-metadata");
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
var typeorm_1 = require("typeorm");
var user_routes_1 = __importDefault(require("./routes/user.routes"));
var app = express_1.default();
typeorm_1.createConnection();
//MIDDLEWARES
app.use(cors_1.default());
app.use(morgan_1.default('dev'));
app.use(express_1.default.json()); //para interpretar lo que llega al servidor en formato json
//ROUTES
app.use(user_routes_1.default); //SON RUTAS DE USER.ROUTES.TS
app.listen(3000);
console.log('Servidor en puerto', 3000);
