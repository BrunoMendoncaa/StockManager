import repoCliente from "../repositories/repoClienteDatabase.js"

class ctrlCliente {
      async index(request, response){
            const content = await repoCliente.findAll()
            response.json(content)
      }

      async create(request, response){
            if (!request.body.nome || !request.body.telefone){
                  response.status(400).json({'msg':'Nome e telefone são obrigatorios.'})
                  return
            }

            const new_cliente = await repoCliente.create(request.body)
            response.status(201).json(new_cliente)
      }

      async delete(request, response){
            await repoCliente.delete(request.params.id)
            response.status(200).send('ok')
      }

      async findByPhone(request, response){
            const all_finded = await repoCliente.findByPhone(request.params.telefone)
            response.json(all_finded)
      }

      async update(request, response){
            const update_cliente = await repoCliente.update(request.body, request.params.id)
            response.json(update_cliente)
      }

      async disableOrEnable(request, response){
            const cliente = await repoCliente.disableOrEnable(request.params.id)
            response.json({'id_cliente' : cliente.id_cliente, 'status': cliente.status})
      }

      async getByStatus(request, response){
            const filter_content = await repoCliente.getByStatus(request.params.status)
            response.json(filter_content)
      }
}

export default new ctrlCliente