import { Router } from "express";
import { listClassRoomController } from "../modules/classRoom/useCases/listClassRoom";
import { createNoticeClassRoomController } from "../modules/noticeClassRoom/Usecases/createNoticeClassRoom";

const noticeClassRoom = Router()

noticeClassRoom.get("/", (request,response) => {
  listClassRoomController.handle(request,response)
})

noticeClassRoom.post("/", (request,response) => {
  createNoticeClassRoomController.handle(request,response)
})