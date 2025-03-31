import suply from '../functions/suply.js'
import uuid4 from 'uuid4'

class repoVendas{
      constructor(){
            this.vendas = [{
                  'id_venda': 'exemplo123',
                  'id_comanda': 'comanda123',
                  'id_produto': 'produto123',
                  'qtd': 2,
                  'valor': 7,
                  'dt_criacao': '2025-03-31',
                  'dt_alteracao': ''
            }]
      }

      showAll(){
            return this.vendas
      }

      create(in_content){
            const {id_comanda, id_produto, qtd, valor} = in_content
            const id_venda = uuid4()
            const dt_criacao = suply.currentDate
            const dt_alteracao = ''

            const new_content = {
                  id_venda,
                  id_comanda,
                  id_produto,
                  qtd,
                  valor,
                  dt_criacao,
                  dt_alteracao
            }

            this.vendas.push(new_content)

            return new_content
      }

      getByidComanda(in_id){
            const filter_content = this.vendas.filter(comanda => comanda.id_comanda == in_id)
            return filter_content
      }

      getByData(in_data){
            const filter_content = this.vendas.filter(venda => venda.dt_criacao == in_data)
            return filter_content
      }

      update(in_id, in_content){
            const venda = this.vendas.find(vendas => vendas.id_venda == in_id)

            if(in_content.id_comanda){venda.id_comanda = in_content.id_comanda}
            if(in_content.id_produto){venda.id_produto = in_content.id_produto}
            if(in_content.qtd){venda.qtd = in_content.qtd}
            if(in_content.valor){venda.valor = in_content.valor}

            venda.dt_alteracao = suply.currentDate

            return venda
      }
}

export default new repoVendas()
