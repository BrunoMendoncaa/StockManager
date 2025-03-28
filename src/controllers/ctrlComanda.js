import repoComanda from "../repositories/repoComanda.js";
class ctrlComanda{
      async showAll(req, res){
            const content_comanda = await repoComanda.showAll()
            res.status(200).json(content_comanda)
      }
}

export default new ctrlComanda
