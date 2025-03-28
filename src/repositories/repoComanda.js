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
}

export default new repoComanda()
