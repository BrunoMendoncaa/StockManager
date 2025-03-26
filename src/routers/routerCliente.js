import { Router } from "express";
import ctrlCliente from "../controllers/ctrlCliente.js";

const routerCliente = Router()

routerCliente.get('/clientes', ctrlCliente.index)
routerCliente.get('/clientes/:telefone', ctrlCliente.findByPhone)

routerCliente.post('/clientes', ctrlCliente.create)
routerCliente.post('/clientes/enabledisable/:id', ctrlCliente.disableOrEnable)

routerCliente.delete('/clientes/:id', ctrlCliente.delete)

routerCliente.put('/clientes/:id', ctrlCliente.update)

export default routerCliente