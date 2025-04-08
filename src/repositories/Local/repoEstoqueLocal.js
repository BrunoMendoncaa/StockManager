import uuid4 from "uuid4"
import suply from '../../functions/suply.js'

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
            const dt_criacao = suply.currentDate
            const dt_alteracao = ''
            const valor_estoque = qtd * valor_unidade

            const new_product = {id_produto, nome, valor_unidade, valor_estoque, qtd, dt_criacao, dt_alteracao}

            this.estoque.push(new_product)

            console.log(`${nome} criado com o ID: ${id_produto}`)
            return new_product
      }

      delete(in_id){
            const updated_estoque = this.estoque.filter(produto => produto.id_produto != in_id)
            this.estoque = updated_estoque

            console.log(`produto com id [${in_id}] deletado`)
            return
      }

      update(in_content, in_id){
            const  {nome, valor_unidade, qtd} = in_content
            const produto = this.estoque.find(currentProduto => currentProduto.id_produto == in_id)
            const dt_alteracao = suply.currentDate

            if(nome){produto.nome = nome}
            if(valor_unidade){ produto.valor_unidade = valor_unidade}
            if(qtd){produto.qtd = qtd}
            if(qtd || valor_unidade){produto.valor_estoque = produto.qtd * produto.valor_unidade}

            produto.dt_alteracao = dt_alteracao

            return produto
      }

}

export default new repoEstoque()