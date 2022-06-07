import { Teacher } from "../../entities/Teacher";
import { ITeachersRepository } from "../../repositories/ITeachersRepository";
import { TeacherRepository } from "../../repositories/TeacherRepository";


class ListTeachersUseCase{
  teacherRepository: ITeachersRepository
  constructor(TeacherRepository:TeacherRepository) {
    this.teacherRepository = TeacherRepository
  }
   async execute() :Promise<Teacher[]>{
    const teachers =  await this.teacherRepository.list()
    return teachers
  }
}

export {ListTeachersUseCase}