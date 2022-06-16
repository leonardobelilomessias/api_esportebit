import { NoticeClassRoom } from "../../entity/NoticeClassRoom"
import { NoticeClassRoomRepository } from "../../repository/noticeClassRoomRepository"

class ListNoticeClassRoomUseCase{
  private noticeClassRoomRepository: NoticeClassRoomRepository
  constructor(noticeClassRoomRepository: NoticeClassRoomRepository) {
    this.noticeClassRoomRepository =noticeClassRoomRepository
  }
  async execute():Promise<NoticeClassRoom[]> {
    const allNoticesClassRoom = await this.noticeClassRoomRepository.list()
    return allNoticesClassRoom
  }

}

export {ListNoticeClassRoomUseCase}