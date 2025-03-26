class repoCliente{
      constructor(){
            this.clientes = []
      }

      async findAll(){
            const content = this.clientes
            return content
      }

}

export default new repoCliente()