"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tipo_UsuarioController_1 = require("./../controllers/Tipo_UsuarioController");
const express_1 = require("express");
class Tipos_UsuarioRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', Tipo_UsuarioController_1.tipos_usuariocontroller.getTipo);
    }
}
const tipos_usuariosroutes = new Tipos_UsuarioRoutes();
exports.default = tipos_usuariosroutes.router;
