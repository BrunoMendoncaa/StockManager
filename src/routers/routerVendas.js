import { Router } from "express";
import ctrlVendas from "../controllers/ctrlVendas.js";

const routerVendas = Router()

//GET
routerVendas.get('/vendas', ctrlVendas.showAll)
routerVendas.get('/vendas/:id', ctrlVendas.getByIdComanda)
routerVendas.get('/vendas/data/venda', ctrlVendas.getByData)

//POST
routerVendas.post('/vendas', ctrlVendas.create)

//DELETE
//PUT
routerVendas.put('/vendas/:id', ctrlVendas.update)

export default routerVendas