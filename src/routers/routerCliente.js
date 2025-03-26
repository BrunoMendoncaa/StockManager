import { Router } from "express";
import ctrlCliente from "../controllers/ctrlCliente.js";

const routerCliente = Router()

routerCliente.get('/clientes', ctrlCliente.index)
routerCliente.post('/clientes', ctrlCliente.create)

export default routerCliente