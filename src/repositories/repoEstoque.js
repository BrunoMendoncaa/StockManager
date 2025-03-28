import uuid4 from "uuid4"

class repoEstoque{
      constructor(){
            this.estoque = [{
                  'id_produto': 'exemplo123',
                  'nome': 'coca cola 2 litros',
                  'valor_unidade': 12,
                  'valor_estoque': 120,
                  'qtd': 10,
                  'dt_criacao': '2025-03-28',
                  'dt_alteracao': ''
            }]
      }

      showAll(){
            return this.estoque
      }

      getById(in_id){
            console.log(`Buscando por produto no estoque: ${in_id}`)
            const filter_estoque = this.estoque.filter(produto => produto.id_produto == in_id)
            return filter_estoque
      }

      create(in_content){
            const {nome, valor_unidade, qtd} = in_content
            const id_produto = uuid4()
            const dt_criacao = new Date().toISOString().split('T')[0]
            const dt_alteracao = ''
            const valor_estoque = qtd * valor_unidade

            const new_product = {id_produto, nome, valor_unidade, valor_estoque, qtd, dt_criacao, dt_alteracao}

            this.estoque.push(new_product)

            console.log(`${nome} criado com o ID: ${id_produto}`)
            return new_product
      }

}

export default new repoEstoque()