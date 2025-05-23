import repoEstoque from "../repositories/repoEstoqueDatabase.js";

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

      async create(req, res){
            const new_product = await repoEstoque.create(req.body)

            if(!req.body.nome || !req.body.valor_unidade || !req.body.qtd){
                  res.status(400).json({'msg':'nome, valor unidade e quantidade são obrigatorios'})
                  return
            }


            res.status(201).json(new_product)
      }

      delete(req, res){
            repoEstoque.delete(req.params.id)
            res.status(200).send('ok')
      }

      async update(req, res){
            const updated_produto = await repoEstoque.update(req.body, req.params.id)
            res.status(200).json(updated_produto)
      }
}

export default new ctrlEstoque