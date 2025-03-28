import express from 'express'

import routerCliente from '../src/routers/routerCliente.js'
import routerEstoque from './routers/routerEstoque.js'
import routerComanda from './routers/routerComanda.js'

const app = express()

app.use(express.json())

app.use(routerCliente)
app.use(routerEstoque)
app.use(routerComanda)

export default app