import { ClassRoomRepository } from "../../repositories/ClassRoomRespository"


class ListClassRoomUseCase{
  private classRomRepository: ClassRoomRepository
  constructor(ClassRoomRepository: ClassRoomRepository) {
    this.classRomRepository = ClassRoomRepository  
  }
 async  execute() {
    const allClass = await this.classRomRepository.list()
    return allClass
  }

}

export {ListClassRoomUseCase}