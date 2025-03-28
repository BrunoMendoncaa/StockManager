import ctrlComanda from "../controllers/ctrlComanda.js";
import { Router } from "express";

const routerComanda = Router()

//GET
routerComanda.get('/comanda', ctrlComanda.showAll)

//POST
routerComanda.post('/comanda', ctrlComanda.create)
//DELETE

//PUT


export default routerComanda
