import { ClassRoomRepository } from "../../repositories/ClassRoomRespository"
import { ICreateClassRoomDTO } from "../../repositories/IClassRoomRepository"


class CreateClassRoomUseCase{

  private classRoomRepository: ClassRoomRepository
  constructor(ClassRoomRepository: ClassRoomRepository) { 
    this.classRoomRepository =ClassRoomRepository
  }
  execute({name,id_teacher}:ICreateClassRoomDTO) {
    this.classRoomRepository.create({name,id_teacher})
  }
  
}

export {CreateClassRoomUseCase}