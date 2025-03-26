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
            await repoCliente.delete(id)
            response.status(200).send('ok')
      }

      async findByPhone(request, response){
            const {telefone} = request.params
            const all_finded = await repoCliente.findByPhone(telefone)

            response.json(all_finded)
            
      }

      async update(request, response){
            const {id} = request.params
            const update_cliente = await repoCliente.update(request.body, id)

            response.json(update_cliente)
      }

      async disableOrEnable(request, response){
            const cliente = await repoCliente.disableOrEnable(request.params.id)
            response.json({'id_cliente' : cliente.id_cliente, 'status': cliente.status})
      }
}

export default new ctrlCliente