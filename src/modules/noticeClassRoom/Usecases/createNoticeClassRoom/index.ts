import { NoticeClassRoomRepository } from "../../repository/noticeClassRoomRepository";
import { CreateNoticeClassRoomController } from "./CreateNoticeClassRoomController";
import { CreateNoticeClassRoomUseCase } from "./CreateNoticeClassRoomUseCase";

const noticeClassRoomRepository = new NoticeClassRoomRepository()
const createNoticeClassRoomUseCase = new CreateNoticeClassRoomUseCase(noticeClassRoomRepository)
const createNoticeClassRoomController = new CreateNoticeClassRoomController(createNoticeClassRoomUseCase)

export{createNoticeClassRoomController}