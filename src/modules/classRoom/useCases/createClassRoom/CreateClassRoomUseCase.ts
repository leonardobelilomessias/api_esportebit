import { ClassRoomRepository } from "../../repositories/ClassRoomRespository"
import { ICreateClassRoomDTO } from "../../repositories/IClassRoomRepository"


class CreateClassRoomUseCase{

  private classRoomRepository: ClassRoomRepository
  constructor(ClassRoomRepository: ClassRoomRepository) { 
    this.classRoomRepository =ClassRoomRepository
  }
  async execute({ name, id_teacher }: ICreateClassRoomDTO) {
    const classRoomExist = await this.classRoomRepository.findByName(name)

    if (classRoomExist) {
      return  Error("ClassRoom already exist!")
    }
    this.classRoomRepository.create({name,id_teacher})
  }
  
}

export {CreateClassRoomUseCase}