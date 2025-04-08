import uuid4 from "uuid4"
import suply from '../functions/suply.js'
import conexao from "../database/db.js"

const db = await conexao()

class repoEstoque{
      constructor(){
            db.query(
                  `create table if not exists TB_ESTOQUE(
                        id_produto varchar(50) primary key not null,
                        nome varchar(30) not null,
                        valor_unidade decimal(5,2) not null,
                        valor_estoque decimal(9,2) not null,
                        qtd int not null,
                        dt_criacao date not null,
                        dt_alteracao date
      
                  )`
            )
      }

      async showAll(){
            const query = await db.query('select * from tb_estoque')
            return query.rows
      }

      async getById(in_id){
            console.log(`Buscando por produto no estoque: ${in_id}`)
            const query = await db.query(
                  `select * from tb_estoque where id_produto = '${in_id}'`
            )
            return query.rows
      }

      async create(in_content){
            const {nome, valor_unidade, qtd} = in_content
            const id_produto = uuid4()
            const dt_criacao = suply.currentDate
            const dt_alteracao = ''
            const valor_estoque = qtd * valor_unidade
            const new_product = {id_produto, nome, valor_unidade, valor_estoque, qtd, dt_criacao, dt_alteracao}

            const query = await db.query(
                  `insert into tb_estoque (id_produto, nome, valor_unidade, valor_estoque, qtd, dt_criacao) values(
                        '${id_produto}',
                        '${nome}',
                        '${valor_unidade}',
                        '${valor_estoque}',
                        '${qtd}',
                        (select now())
                  )`
            )

            console.log(`${nome} criado com o ID: ${id_produto}`)
            return new_product
      }

      async delete(in_id){
            const query = await db.query(`delete from tb_estoque where id_produto = '${in_id}'`)
            console.log(`produto com id [${in_id}] deletado`)
            return
      }

      async update(in_content, in_id){
            const  {nome, valor_unidade, qtd} = in_content
            var sql
            if(nome){sql = await db.query(`update tb_estoque set nome = '${nome}' where id_produto = '${in_id}'`)}
            if(valor_unidade){sql = await db.query(`update tb_estoque set valor_unidade = '${valor_unidade}' where id_produto = '${in_id}'`)}
            if(qtd){sql = await db.query(`update tb_estoque set qtd = '${qtd}' where id_produto = '${in_id}'`)}
            if(qtd || valor_unidade){sql = await db.query(`update tb_estoque set valor_estoque = ${qtd * valor_unidade} where id_produto = '${in_id}'`)}

            sql = await db.query(`update tb_estoque set dt_alteracao = (select now()) where id_produto = '${in_id}'`)

            const produto = await db.query(`select * from tb_estoque where id_produto = '${in_id}'`)

            return produto.rows
      }

}

export default new repoEstoque()