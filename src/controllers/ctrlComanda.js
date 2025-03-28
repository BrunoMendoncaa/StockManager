import repoComanda from "../repositories/repoComanda.js";
class ctrlComanda{
      async showAll(req, res){
            const content_comanda = await repoComanda.showAll()
            res.status(200).json(content_comanda)
      }

      async create(req, res){
            if(!req.body.id_cliente){
                  res.status(400).json({'msg':'id_cliente é um campo obrigatório'})
                  return
            }

            const new_comanda = await repoComanda.create(req.body)
            res.status(201).json(new_comanda)
      }

      async getByStatus(req, res){
            const filter_comanda = await repoComanda.getByStatus(req.params.status)
            
            if(filter_comanda.length <= 0){
                  res.status(404).json(filter_comanda)
                  return
            }

            res.status(200).json(filter_comanda)
      }
}



export default new ctrlComanda
