import 'dotenv/config'
import pg from 'pg'

async function conexao(){
      if(global.connection){return global.connection}
      const {Pool} = pg
      const pool = new Pool({
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            database: process.env.DB_NAME,
      })

      await pool.query(
            `create table if not exists TB_CLIENTES(
                  id_cliente varchar(50) primary key not null,
                  nome varchar(30) not null,
                  telefone varchar(15) not null,
                  status varchar(15) not null,
                  dt_criacao date not null,
                  dt_alteracao date
            )`
      )

      await pool.query(
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

      await pool.query(
            `create table if not exists TB_COMANDAS(
                  id_comanda varchar(50) primary key not null,
                  id_cliente varchar(50) not null,
                  status varchar(30) not null,
                  valor decimal(9,2) not null,
                  dt_criacao date not null,
                  dt_alteracao date
            )`
      )

      await pool.query(
            `create table if not exists TB_VENDAS(
                  id_venda varchar(50) primary key not null,
                  id_comanda varchar(50) not null,
                  id_produto varchar(50) not null,
                  qtd int not null,
                  valor decimal(5,2) not null,
                  dt_criacao date not null,
                  dt_alteracao date
            )`
      )
      global.connection = pool
      return pool
}

export default conexao