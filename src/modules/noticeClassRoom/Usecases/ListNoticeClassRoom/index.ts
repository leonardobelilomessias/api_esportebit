import { ListClassRoomController } from "../../../classRoom/useCases/listClassRoom/ListClassRoomController";
import { NoticeClassRoomRepository } from "../../repository/noticeClassRoomRepository";
import { ListNoticeClassRoomController } from "./ListNoticeClassRoomController";
import { ListNoticeClassRoomUseCase } from "./ListNoticeClassRoomUseCase";

const noticeClassRoomRepository = new NoticeClassRoomRepository()
const listNoticeClassRoomUsecase = new ListNoticeClassRoomUseCase(noticeClassRoomRepository)
const listNoticeClassRoomController = new ListNoticeClassRoomController(listNoticeClassRoomUsecase)

export { listNoticeClassRoomController}