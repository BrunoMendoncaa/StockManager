import ctrlEstoque from "../controllers/ctrlEstoque.js";
import { Router } from "express";

const routerEstoque = Router()

//GET
routerEstoque.get('/estoque', ctrlEstoque.showAll)
routerEstoque.get('/estoque/:id', ctrlEstoque.getById)

//POST
routerEstoque.post('/estoque', ctrlEstoque.create)

//DELETE
routerEstoque.delete('/estoque/:id', ctrlEstoque.delete)

//PUT
routerEstoque.put('/estoque/:id', ctrlEstoque.update)
export default routerEstoque