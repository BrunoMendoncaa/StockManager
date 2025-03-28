import ctrlEstoque from "../controllers/ctrlEstoque.js";
import { Router } from "express";

const routerEstoque = Router()

//GET
routerEstoque.get('/estoque', ctrlEstoque.showAll)
routerEstoque.get('/estoque/:id', ctrlEstoque.getById)

//POST
routerEstoque.post('/estoque', ctrlEstoque.create)

//DELETE

//UPDATE

export default routerEstoque