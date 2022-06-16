import { Router } from "express";
import { listClassRoomController } from "../modules/classRoom/useCases/listClassRoom";
import { createNoticeClassRoomController } from "../modules/noticeClassRoom/Usecases/createNoticeClassRoom";
import { listNoticeClassRoomController } from "../modules/noticeClassRoom/Usecases/ListNoticeClassRoom";

const noticeClassRoom = Router()

noticeClassRoom.get("/", (request,response) => {
  listNoticeClassRoomController.handle(request, response)
  
})

noticeClassRoom.post("/", (request,response) => {
  createNoticeClassRoomController.handle(request,response)
})

export {noticeClassRoom}