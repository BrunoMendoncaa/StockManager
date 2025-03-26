import { Router } from "express";
import ctrlCliente from "../controllers/ctrlCliente.js";

const routerCliente = Router()

routerCliente.get('/clientes', ctrlCliente.index)

export default routerCliente