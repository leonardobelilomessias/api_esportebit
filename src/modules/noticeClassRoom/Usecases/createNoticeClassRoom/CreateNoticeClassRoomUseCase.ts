import { ICreateNoticeClassRoom } from "../../repository/INoticeClassRoomRepository"
import { NoticeClassRoomRepository } from "../../repository/noticeClassRoomRepository"

class CreateNoticeClassRoomUseCase{
 private noticeClassRoomRepository:NoticeClassRoomRepository

  constructor(noticeClassRoomRepository:NoticeClassRoomRepository) {
    this.noticeClassRoomRepository = noticeClassRoomRepository
  }
  async execute({title,content}:ICreateNoticeClassRoom) {
    const newNotice = await this.noticeClassRoomRepository.create({ title, content })
    return newNotice
  }
}

export {CreateNoticeClassRoomUseCase}