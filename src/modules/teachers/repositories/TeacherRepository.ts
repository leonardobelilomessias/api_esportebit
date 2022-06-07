

import { Repository } from "typeorm";
import { AppDataSource } from "../../../database/data-source";
import { Teacher } from "../entities/Teacher";
import { ICreateTeacherDTO, ITeachersRepository } from "./ITeachersRepository";




class TeacherRepository implements ITeachersRepository{
  private teachers: Repository<Teacher>
  constructor() {
    this.teachers = AppDataSource.getRepository(Teacher)
    
  }
  async create({name, description}:ICreateTeacherDTO ):Promise<void> {
  const teacher = new Teacher()
  Object.assign(teacher, {
    name,
    description
  })
    await this.teachers.save(teacher)
    
  }
  async list(): Promise<Teacher[]>{ 
    const all = await this.teachers.find()
    console.log(all)
    return all ;
  }
}

export {TeacherRepository}