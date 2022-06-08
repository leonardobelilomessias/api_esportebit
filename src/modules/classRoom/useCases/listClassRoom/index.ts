import { ClassRoomRepository } from "../../repositories/ClassRoomRespository";
import { ListClassRoomController } from "./ListClassRoomController";
import { ListClassRoomUseCase } from "./ListClassRoomUseCase";


const classRoomRepository = new ClassRoomRepository()
const listClassRoomUseCase = new ListClassRoomUseCase(classRoomRepository)
const listClassRoomController = new ListClassRoomController(listClassRoomUseCase)

export{listClassRoomController}