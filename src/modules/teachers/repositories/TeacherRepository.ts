
import { Connection } from "mysql2";
import { createConnection } from "../../../database/dbMysql";
import { Teacher } from "../model/Teacher";
import { ICreateTeacherDTO, ITeachersRepository } from "./implementations/ITeachersRepository";




 class    TeacherRepository implements ITeachersRepository{
  private teachers: Connection
  public constructor() {
    this.teachers= createConnection
  }

  create({name, description}:ICreateTeacherDTO ){
  const teacher = new Teacher()
  Object.assign(teacher, {
    name,
    description
  })
  const sql = `INSERT INTO  teachers(id,name,description) VALUES('${teacher.id}','${teacher.name}','${teacher.description}')`
    this.teachers.query(sql, (err, result) => {
        if (err) throw err;
        console.log("1 record inserted, ID: " + result);
      })  
    
  }
   list() { 
      const  rows =  this.teachers.query("SELECT * FROM teachers",function (err, rows) {return rows})
    

    return rows
  }
}

export {TeacherRepository}