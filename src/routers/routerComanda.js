import ctrlComanda from "../controllers/ctrlComanda.js";
import { Router } from "express";

const routerComanda = Router()

//GET
routerComanda.get('/comanda', ctrlComanda.showAll)
routerComanda.get('/comanda/status/:status', ctrlComanda.getByStatus)
routerComanda.get('/comanda/id/:id', ctrlComanda.getById)

//POST
routerComanda.post('/comanda', ctrlComanda.create)

//DELETE
routerComanda.delete('/comanda/:id', ctrlComanda.delete)

//PUT
routerComanda.put('/comanda/:id', ctrlComanda.update)

export default routerComanda
