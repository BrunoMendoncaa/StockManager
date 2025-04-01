import repoVendas from "../repositories/repoVendasLocal.js";

class ctrlVendas{
      async showAll(req, res){
            const all_content = await repoVendas.showAll()
            res.json(all_content)
      }

      async create(req, res){
            const new_content = await repoVendas.create(req.body)
            res.status(201).json(new_content)
      }

      async getByIdComanda(req,res){
            const filter_content = await repoVendas.getByidComanda(req.params.id)

            if(filter_content.length <= 0){
                  res.status(404).json(filter_content)
                  return
            }

            res.json(filter_content)
      }

      async getByData(req,res){
            if(!req.query.data){
                  res.status(400).json({'msg':'Data da venda é obrigatório'})
                  return
            }

            const filter_content = await repoVendas.getByData(req.query.data)
            if(filter_content <= 0){
                  res.status(404).json(filter_content)
                  return
            }

            res.json(filter_content)
      }

      async update(req, res){
            const update_content = await repoVendas.update(req.params.id, req.body)
            res.json(update_content)
      }

      delete(req, res){
            repoVendas.delete(req.params.id)
            res.send('ok')
      }
}

export default new ctrlVendas
