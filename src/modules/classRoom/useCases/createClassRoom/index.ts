import { ClassRoomRepository } from "../../repositories/ClassRoomRespository";
import { CreateClassRoomController } from "./CreateClassRoomController";
import { CreateClassRoomUseCase } from "./CreateClassRoomUseCase";



const classRoomRepository = new ClassRoomRepository()
const createClassRoomUseCase = new CreateClassRoomUseCase(classRoomRepository)
const createClassRoomController = new CreateClassRoomController(createClassRoomUseCase)

export{createClassRoomController}