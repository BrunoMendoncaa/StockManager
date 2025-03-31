import express from 'express'

import routerCliente from '../src/routers/routerCliente.js'
import routerEstoque from './routers/routerEstoque.js'
import routerComanda from './routers/routerComanda.js'
import routerVendas from './routers/routerVendas.js'

const app = express()

app.use(express.json())

app.use(routerCliente)
app.use(routerEstoque)
app.use(routerComanda)
app.use(routerVendas)

export default app
