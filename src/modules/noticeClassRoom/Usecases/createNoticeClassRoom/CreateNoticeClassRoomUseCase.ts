import { ICreateNoticeClassRoom } from "../../repository/INoticeClassRoomRepository"
import { NoticeClassRoomRepository } from "../../repository/noticeClassRoomRepository"

class CreateNoticeClassRoomUseCase{
 private noticeClassRoomRepository:NoticeClassRoomRepository

  constructor(noticeClassRoomRepository:NoticeClassRoomRepository) {
    this.noticeClassRoomRepository = noticeClassRoomRepository
  }
  async execute({title,content,classRoom,teacher}:ICreateNoticeClassRoom) {
    const newNotice = await this.noticeClassRoomRepository.create({ title, content,classRoom,teacher })
    return newNotice
  }
}

export {CreateNoticeClassRoomUseCase}