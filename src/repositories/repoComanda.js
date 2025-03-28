import uuid4 from "uuid4"

class repoComanda{
      constructor(){
            this.comanda = [{
                  'id_comanda': 'exemplo123',
                  'id_cliente': 'exemplo123',
                  'status': 'pendente',
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
            const dt_criacao = new Date().toISOString().split('T')[0]
            const dt_alteracao = ''
            const status = 'pendente'
            const valor = 0

            const new_comanda = {id_comanda, id_cliente ,status, valor, dt_criacao, dt_alteracao}

            this.comanda.push(new_comanda)

            return new_comanda
      }
}

export default new repoComanda()
