import express from 'express'
import routerCliente from '../src/routers/routerCliente.js'

const app = express()

app.use(express.json())
app.use(routerCliente)

export default app