import suply from '../functions/suply.js'
import uuid4 from 'uuid4'
import conexao from '../database/db.js'

const db = await conexao()

class repoVendas{
      constructor(){}

      async showAll(){
            const sql = await db.query('select * from tb_vendas')
            return sql.rows
      }

      async create(in_content){
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

            const sql = await db.query(
                  `insert into tb_vendas (id_venda, id_comanda, id_produto, qtd, valor, dt_criacao) values(
                        '${id_venda}',
                        '${id_comanda}',
                        '${id_produto}',
                        ${qtd},
                        ${valor},
                        (select now())
                  )`
            )

            return new_content
      }

      async getByidComanda(in_id){
            const sql = await db.query(`select * from tb_vendas where id_comanda = '${in_id}'`)
            return sql.rows 
      }

      async getByData(in_data){
            console.log(in_data)
            const sql = await db.query(`select * from tb_vendas where dt_criacao = '${in_data}'`)
            return sql.rows
      }

      async update(in_id, in_content){
            var sql
            if(in_content.id_comanda){sql = await db.query(`update tb_vendas set id_comanda = '${in_content.id_comanda}' where id_venda = '${in_id}'`)}
            if(in_content.id_produto){sql = await db.query(`update tb_vendas set id_produto = '${in_content.id_produto}' where id_venda = '${in_id}'`)}
            if(in_content.qtd){sql = await db.query(`update tb_vendas set qtd = '${in_content.qtd}' where id_venda = '${in_id}'`)}
            if(in_content.valor){sql = await db.query(`update tb_vendas set valor = '${in_content.valor}' where id_venda = '${in_id}'`)}
            sql = await db.query(`update tb_vendas set dt_alteracao = (select now()) where id_venda = '${in_id}'`)

            sql = await db.query(`select * from tb_vendas where id_venda = '${in_id}'`)
            return sql.rows
      }

      async delete(in_id){
            const sql = db.query(`delete from tb_vendas where id_venda = '${in_id}'`)
            return
      }
}

export default new repoVendas()
