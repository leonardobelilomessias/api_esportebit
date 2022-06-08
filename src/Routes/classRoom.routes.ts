import { response, Router } from "express";
import { createClassRoomController } from "../modules/classRoom/useCases/createClassRoom";
import { listClassRoomController } from "../modules/classRoom/useCases/listClassRoom";

const classRoomRoutes = Router()

classRoomRoutes.post("/", (request, response) => {
  
  createClassRoomController.handle(request,response)
})

classRoomRoutes.get("/", (request, response) => {
  listClassRoomController.handle(request,response)
})

export {classRoomRoutes}