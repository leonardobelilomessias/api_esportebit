
import { Teacher } from "../model/Teacher";
import { ICreateTeacherDTO, ITeachersRepository } from "./ITeachersRepository";




class TeacherRepository implements ITeachersRepository{
  private teachers: Teacher[]
  constructor() {
    this.teachers=[]
  }
  create({name, description}:ICreateTeacherDTO ):void {
  const teacher = new Teacher()
  Object.assign(teacher, {
    name,
    description
  })
    this.teachers.push(teacher)
    console.log(this.teachers)
  }
  list() :Teacher[]{
    return this.teachers
  }
}

export {TeacherRepository}