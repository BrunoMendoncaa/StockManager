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

      async delete(in_id){
            console.log(`Cliente a ser removido: ${in_id}`)

            const cliente_a_remover = await this.clientes.findIndex(cliente => cliente.id_cliente == in_id)
            if (cliente_a_remover != -1){
                  this.clientes.splice(cliente_a_remover,1)
                  console.log('Cliente removido')
            }else{
                  console.log('Cliente não localizado')
            }
      }

      async findByPhone(in_phone){
            console.log(`Localizando cadastros com o telefone: ${in_phone}`)

            const all_finded = await this.clientes.filter(cliente => cliente.telefone == in_phone)
            return all_finded
      }

      async update(in_content, in_id){
            console.log(`Alterando dados do cliente: ${in_id} `)
            const {nome, telefone} = in_content
            const dt_alteracao = new Date().toISOString().split('T')[0]
            const cliente = await this.clientes.find(currentCliente => currentCliente.id_cliente == in_id)
            
            cliente.dt_alteracao = dt_alteracao
            if (nome){cliente.nome = nome}
            if (telefone){cliente.telefone = telefone}

            

            return cliente
      }

      async disableOrEnable(in_id){
            const cliente = await this.clientes.find(currentCliente => currentCliente.id_cliente == in_id)
            if (cliente.status == 'ativo'){
                  console.log(`Desativando o cliente: ${in_id}`)
                  cliente.status = 'inativo'
            }else{
                  console.log(`Ativando o cliente: ${in_id}`)
                  cliente.status = 'ativo'
            }

            return cliente
      }

}

export default new repoCliente()