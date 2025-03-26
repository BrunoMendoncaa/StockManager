import repoCliente from "../repositories/repoCliente.js";
class ctrlCliente {
      async index(request, response){
            const content = await repoCliente.findAll()
            response.json(content)
      }
}

export default new ctrlCliente