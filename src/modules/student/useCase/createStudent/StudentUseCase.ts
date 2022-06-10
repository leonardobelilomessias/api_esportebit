import { ICreateStudentDTO } from "../../repositories/IStudentRepository"
import { StudentRepository } from "../../repositories/StudentRepository"

class CreateStudentUseCase{
  private studentRepository: StudentRepository
  constructor(studentRepository:StudentRepository) {
    this.studentRepository = studentRepository
  }
  async execute({name,old,heigth,weight,id_class,id_teacher}:ICreateStudentDTO) {
    const student = await this.studentRepository.create({ name, heigth, old, weight,id_class,id_teacher })
    return student
  }

  
}

export{CreateStudentUseCase}