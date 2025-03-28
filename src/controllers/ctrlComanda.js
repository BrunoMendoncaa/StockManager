import repoComanda from "../repositories/repoComanda.js";
class ctrlComanda{
      async showAll(req, res){
            const content_comanda = await repoComanda.showAll()
            res.status(200).json(content_comanda)
      }

      async create(req, res){
            const new_comanda = await repoComanda.create(req.body)
            res.status(201).json(new_comanda)
      }
}



export default new ctrlComanda
