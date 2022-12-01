import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions'
import "reflect-metadata"
import { Users } from './Entities/User'

const typeOrmConfig: PostgresConnectionOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    password: 'admin',               
    database: 'postgres',
    synchronize: true,
    logging: false, 
    entities: [
        Users
    ]

} 

export {typeOrmConfig}