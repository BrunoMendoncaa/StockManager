import repoCliente from "../repositories/repoCliente.js";
class ctrlCliente {
      async index(request, response){
            const content = await repoCliente.findAll()
            response.json(content)
      }

      async create(request, response){
            const new_cliente = await repoCliente.create(request.body)
            response.status(201).json(new_cliente)
      }
}

export default new ctrlCliente