import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import cors from 'cors'
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions'
import "reflect-metadata"
import { createConnection } from 'typeorm'

import { schema } from './Schema'
import { DataSource } from 'typeorm'
import { Users } from './Entities/User'
import { connect } from 'http2'
 import { typeOrmConfig } from './config'
import { appendFile } from 'fs'
// const { Client } = require('pg')



// (async()=> {
//     const conn = await createConnection(typeOrmConfig)
//     console.log("PG Connected")

//     await conn.close()
//     console.log("PG CLosed")
// })   


const main = async() => {
    
    const app = express()
    app.use(cors())
    app.use(express.json())
    app.use("/graphql", graphqlHTTP({
        schema,
        graphiql: true
    }))
   
    const AppDataSource =  new DataSource ({
        type: 'postgres',
        host: 'localhost',
        port: 5432,   
        password: 'admin',   
        username: 'postgres',            
        database: 'postgres',
        synchronize: true,
        logging: false, 
        entities: [
            Users
        ]
    })
    
    AppDataSource.initialize().then(() => {
        console.log("Database COnnectes")
        app.listen(3001,() => {
            console.log("Server is listening on port 3001")
        })
    }).catch((err) => console.log(err))

   
}



main().catch((err) => {
    console.log(err)
})









// (async()=> {
//     const conn = await createConnection(typeOrmConfig)
//     console.log("PG Connected")

//     await conn.close()
//     console.log("PG CLosed")
// })    
    


    


// const client = new Client({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'postgres',
//     password: 'Rakeshd123@',
//     port: 5432,
//   })
//   client.connect(function() {
//     if (!connect) throw console.log('err');
//     console.log("Connected!");
//   });
 




//   client.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//   });
// const AppDataSource = new DataSource({
//     type : "postgres",

//     host: 'localhost',
//     port: 5432,
//     database: 'postgres',
//     password: 'Rakeshd123@',

// })
// client.then(() => {
//     console.log("Database Connected")
// }).catch(() => {
//     console.log("Error Connecting Database")
// })

