import uuid4 from "uuid4"
import suply from '../functions/suply.js'

class repoComanda{
      constructor(){
            this.comanda = [{
                  'id_comanda': 'exemplo123',
                  'id_cliente': 'exemplo123',
                  'status': 'finalizada',
                  'valor': 100,
                  'dt_criacao': '2025-03-28',
                  'dt_alteracao': ''
            }]
      }

      showAll(){
            return this.comanda
      }

      create(in_content){
            const {id_cliente} = in_content
            const id_comanda = uuid4()
            const dt_criacao = suply.currentDate
            const dt_alteracao = ''
            const status = 'pendente'
            const valor = 0

            const new_comanda = {id_comanda, id_cliente ,status, valor, dt_criacao, dt_alteracao}

            this.comanda.push(new_comanda)

            return new_comanda
      }

      getByStatus(in_status){
            const filter_comanda = this.comanda.filter(comanda => comanda.status == in_status)
            return filter_comanda
      }

      getById(in_id){
            const filter_comanda = this.comanda.filter(comanda => comanda.id_comanda == in_id)
            return filter_comanda
      }

      delete(in_id){
            const filter_comanda = this.comanda.filter(comanda => comanda.id_comanda != in_id)
            this.comanda = filter_comanda
      }

      update(in_content, in_id){
            const {status, valor} = in_content
            const comanda = this.comanda.find(currentComanda => currentComanda.id_comanda == in_id)
            const dt_alteracao = suply.currentDate

            if(status){comanda.status = status}
            if(valor){comanda.valor = valor}

            comanda.dt_alteracao = dt_alteracao

            return comanda
      }
}

export default new repoComanda()
