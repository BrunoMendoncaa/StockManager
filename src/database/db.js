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

      global.connection = pool
      return pool
}

export default conexao