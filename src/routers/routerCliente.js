import { Router } from "express";
import ctrlCliente from "../controllers/ctrlCliente.js";

const routerCliente = Router()

routerCliente.get('/clientes', ctrlCliente.index)
routerCliente.get('/clientes/:telefone', ctrlCliente.findByPhone)

routerCliente.post('/clientes', ctrlCliente.create)

routerCliente.delete('/clientes/:id', ctrlCliente.delete)

export default routerCliente