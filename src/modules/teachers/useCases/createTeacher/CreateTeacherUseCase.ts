import { ITeachersRepository } from "../../repositories/ITeachersRepository";
import { TeacherRepository } from "../../repositories/TeacherRepository";


interface IRequest{
  name: string;
  description:string
}

class CreateTeacherUseCase{
  private teacherRepository: ITeachersRepository

  constructor(RepositoryTeacher: TeacherRepository) {
    this.teacherRepository = RepositoryTeacher
  }

  execute({ name, description }: IRequest) {
    const teacher = {name,description}
    this.teacherRepository.create(teacher)
  }

}

export {CreateTeacherUseCase}