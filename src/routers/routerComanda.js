import ctrlComanda from "../controllers/ctrlComanda.js";
import { Router } from "express";

const routerComanda = Router()

//GET
routerComanda.get('/comanda', ctrlComanda.showAll)
routerComanda.get('/comanda/:status', ctrlComanda.getByStatus)

//POST
routerComanda.post('/comanda', ctrlComanda.create)

//DELETE

//PUT


export default routerComanda
