import { Router } from "express";
import ctrlCliente from "../controllers/ctrlCliente.js";

const routerCliente = Router()

//GET
routerCliente.get('/clientes', ctrlCliente.index)
routerCliente.get('/clientes/:telefone', ctrlCliente.findByPhone)
routerCliente.get('/clientes/status/:status', ctrlCliente.getByStatus)

//POST
routerCliente.post('/clientes', ctrlCliente.create)
routerCliente.post('/clientes/enabledisable/:id', ctrlCliente.disableOrEnable)

//DELETE
routerCliente.delete('/clientes/:id', ctrlCliente.delete)

//PUT
routerCliente.put('/clientes/:id', ctrlCliente.update)

export default routerCliente