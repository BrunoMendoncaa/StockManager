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

}

export default new repoEstoque()