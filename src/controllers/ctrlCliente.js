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

      async delete(request, response){
            const id = request.params.id
            console.log(`Cliente a ser removido: ${id}`)
            await repoCliente.delete(id)
            response.status(200).send('ok')
      }
}

export default new ctrlCliente