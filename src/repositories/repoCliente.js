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
            this.clientes = this.clientes.filter(cliente => cliente.id_cliente != in_id)
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

      async getByStatus(in_status){
            console.log(`Buscando cadastros com status: ${in_status}`)
            if (in_status == 'ativo' || in_status == 'inativo'){
                  const filter_content = await this.clientes.filter(cliente => cliente.status == in_status)
                  return filter_content
            }else{
                  console.log('Status inválido')
                  return []
            }
      }

}

export default new repoCliente()