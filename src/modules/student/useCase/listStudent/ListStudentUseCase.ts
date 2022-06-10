import { StudentRepository } from "../../repositories/StudentRepository"

class ListStudentUseCase{
  private studentRepository: StudentRepository
  
  constructor(studentRespository: StudentRepository) {
    this.studentRepository = studentRespository
  }
  async execute() {
    const students= await this.studentRepository.list()
    return students
  }
}
export{ListStudentUseCase}