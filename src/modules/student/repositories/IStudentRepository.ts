import { Student } from "../entity/Student";


interface ICreateStudentDTO{
  name: string
  old: number
  heigth: number
  weight: number
  id_class: string
  id_teacher:string
  
}

interface IStudentRepository{

  create({name,heigth,old,weight}:ICreateStudentDTO):Promise<Student>;

  list(): Promise<Student[]>

  findByName(name:string): Promise<Student>
}

export {IStudentRepository,ICreateStudentDTO}
