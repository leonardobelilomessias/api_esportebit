import { Teacher } from "../../model/Teacher";
import { ITeachersRepository } from "../../repositories/implementations/ITeachersRepository";
import { TeacherRepository } from "../../repositories/TeacherRepository";


class ListTeachersUseCase{
  teacherRepository: ITeachersRepository
  constructor(TeacherRepository:TeacherRepository) {
    this.teacherRepository = TeacherRepository
  }
    execute(){
    const teachers = this.teacherRepository.list()
    return  teachers
  }
}

export {ListTeachersUseCase}