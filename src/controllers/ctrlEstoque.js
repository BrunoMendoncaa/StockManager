import repoEstoque from "../repositories/repoEstoque.js";

class ctrlEstoque{
      async showAll(req, res){
            const estoque_content = await repoEstoque.showAll()
            res.json(estoque_content)
      }

      async getById(req, res){
            const filter_estoque = await repoEstoque.getById(req.params.id)
            
            if(!filter_estoque.length > 0){
                  res.status(404).json(filter_estoque)
                  return
            }

            res.status(200).json(filter_estoque)
      }
}

export default new ctrlEstoque