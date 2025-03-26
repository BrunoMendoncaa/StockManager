import uuid4 from 'uuid4'

class repoCliente{
      constructor(){
            this.clientes = [{
                  'id_cliente': 'exemplo123',
                  'nome': 'Bruno mendonça',
                  'status': 'ativo',
                  'dt_criacao': '2025-03-26',
                  'dt_alteracao': '',
                  'telefone': '11993020625'
            }]
      }

      async findAll(){
            const content = this.clientes
            return content
      }

      async create(in_content){
            const {nome, telefone} = in_content
            const id_cliente = uuid4()
            const dt_criacao = new Date().toISOString().split('T')[0]
            const dt_alteracao = ''
            const status = 'ativo'

            const new_content = {id_cliente, nome, status, dt_criacao, dt_alteracao,telefone}
            this.clientes.push(new_content)

            return new_content
      }

}

export default new repoCliente()