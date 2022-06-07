import { application } from 'express'
import { DataSource, DataSourceOptions } from 'typeorm'
import { Teacher } from '../modules/teachers/entities/Teacher'

export const AppDataSource = new DataSource({
  type:"mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "Leo175033",
  database: "db_esportebit",
  entities: [Teacher],
  subscribers: [
      "subscriber/*.js"
  ],
  extra: [{
    cli: {
      entitiesDir: "./src"
  }
  }],

  migrations: [
      "migration/*.js"
  ],

}
)

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })