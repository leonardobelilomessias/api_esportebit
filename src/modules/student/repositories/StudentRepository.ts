import { Repository } from "typeorm";
import { AppDataSource } from "../../../database/data-source";
import { Student } from "../entity/Student";
import { ICreateStudentDTO, IStudentRepository } from "./IStudentRepository";


class StudentRepository implements IStudentRepository {
  private students: Repository<Student>
  constructor() {
    this.students = AppDataSource.getRepository(Student)
  }

  async  create({name,heigth,old,weight,id_class,id_teacher}:ICreateStudentDTO): Promise<Student> {
     const newStudent = new Student()
     Object.assign(newStudent,{ name, heigth, old, weight,id_class,id_teacher})
     console.log(newStudent)
    await this.students.save(newStudent)
    return newStudent
  }
  async list(): Promise<Student[]> {
    const all = await this.students.find()
    return  all
  }
  async findByName(name:string): Promise <Student> {

    const studentExist = await this.students.createQueryBuilder("students")
    .where("name = :name", { name: name })
    .getOne()
    return studentExist
  }


}

export{StudentRepository}