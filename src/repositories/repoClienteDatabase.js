import uuid4 from 'uuid4'
import suply from '../functions/suply.js'
import conexao from '../database/db.js'

const db = await conexao()

class repoCliente{
      constructor(){
            db.query(
                  `create table if not exists TB_CLIENTES(
                        id_cliente varchar(50) primary key not null,
                        nome varchar(30) not null,
                        telefone varchar(15) not null,
                        status varchar(15) not null,
                        dt_criacao date not null,
                        dt_alteracao date
                  )`
            )
      }

      async findAll(){

            const content = (await db).query('select * from tb_clientes')
            const retorno = (await content).rows
            return retorno
      }

      async create(in_content){

            const {nome, telefone} = in_content
            const id_cliente = uuid4()
            const dt_criacao = suply.currentDate
            const dt_alteracao = ''
            const status = 'ativo'

            const new_content = {id_cliente, nome, status, dt_criacao, dt_alteracao,telefone}
            const query = (await db).query(
                  `insert into TB_CLIENTES (id_cliente, nome, telefone, status, dt_criacao)values(
                       '${id_cliente}',
                       '${nome}',
                       '${telefone}',
                       '${status}',
                       (select now())
                  )`
            )

            return new_content
      }

      async delete(in_id){
            const query = await db.query(`delete from tb_clientes where id_cliente = '${in_id}'`)
      }

      async findByPhone(in_phone){

            console.log(`Localizando cadastros com o telefone: ${in_phone}`)

            const all_finded = await db.query(
                  `select * from tb_clientes where telefone = '${in_phone}'`
            )
            return all_finded.rows
      }

      async update(in_content, in_id){

            console.log(`Alterando dados do cliente: ${in_id} `)
            const {nome, telefone} = in_content
            var query
            if (nome){
                  query = await db.query(
                        `update tb_clientes set nome = '${nome}' where id_cliente = '${in_id}'`
                  )
            }
            if (telefone){
                  query = await db.query(
                        `update tb_clientes set telefone = '${telefone}' where id_cliente = '${in_id}'`
                  )
            }

            query = await db.query(
                  `update tb_clientes set dt_alteracao = (select now()) where id_cliente = '${in_id}'`
            )

            query = await db.query(
                  `select * from tb_clientes where id_cliente = '${in_id}'`
            )
            return query.rows
      }

      async disableOrEnable(in_id){
            var query
            const cliente = await db.query(`select * from tb_clientes where id_cliente = '${in_id}'`)

            if (cliente.rows[0].status == 'ativo'){
                  console.log(`Desativando o cliente: ${in_id}`)
                  query = await db.query(
                        `update tb_clientes set status = 'inativo' where id_cliente = '${in_id}'`
                  )
            }else{
                  console.log(`Ativando o cliente: ${in_id}`)
                  query = await db.query(
                        `update tb_clientes set status = 'ativo' where id_cliente = '${in_id}'`
                  )
            }
            query = await db.query(`select * from tb_clientes where id_cliente = '${in_id}'`)
            return query.rows[0]
      }

      async getByStatus(in_status){

            console.log(`Buscando cadastros com status: ${in_status}`)
            if (in_status == 'ativo' || in_status == 'inativo'){
                  const filter_content = await db.query(
                        `select * from tb_clientes where status = '${in_status}'`
                  )
                  return filter_content.rows
            }else{
                  console.log('Status inválido')
                  return []
            }
      }

}

export default new repoCliente()