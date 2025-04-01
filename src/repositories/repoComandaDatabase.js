import uuid4 from "uuid4"
import suply from '../functions/suply.js'
import conexao from "../database/db.js"


const db = await conexao()

class repoComanda{
      constructor(){}
      
      async showAll(){
            const sql = await  db.query('select * from tb_comandas')
            return sql.rows
      }

      async create(in_content){
            const {id_cliente} = in_content
            const id_comanda = uuid4()
            const status = 'pendente'
            const valor = 0
            const dt_criacao = suply.currentDate
            const dt_alteracao = ''
            const new_comanda = {id_comanda, id_cliente ,status, valor, dt_criacao, dt_alteracao}

            const sql = await db.query(
                  `insert into tb_comandas (id_comanda, id_cliente, status, valor, dt_criacao)values(
                        '${id_comanda}',
                        '${id_cliente}',
                        '${status}',
                        '${valor}',
                        (select now())
                  )`
            )


            return new_comanda
      }

      async getByStatus(in_status){
            const sql = await db.query(`select * from tb_comandas where status = '${in_status}'`)
            return sql.rows
      }

      async getById(in_id){
            const sql = await db.query(`select * from tb_comandas where id_comanda = '${in_id}'`)
            return sql.rows
      }

      async delete(in_id){
            const sql = await db.query(`delete from tb_comandas where id_comanda = '${in_id}'`)
            return 
      }

      async update(in_content, in_id){
            const {status} = in_content
            var {valor} = in_content
            valor = parseFloat(valor)
            var sql

            console.log(valor)

            if(status){sql = await db.query(`update tb_comandas set status = '${status}' where id_comanda = '${in_id}'`)}
            if(valor){sql = await db.query(`update tb_comandas set valor = ${valor} where id_comanda = '${in_id}'`)}
            sql = await db.query(`update tb_comandas set dt_alteracao = (select now()) where id_comanda = '${in_id}'`)

            sql = await db.query(`select * from tb_comandas where id_comanda = '${in_id}'`)
            return sql.rows
      }
}

export default new repoComanda()
