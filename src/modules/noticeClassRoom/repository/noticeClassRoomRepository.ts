import { Repository } from "typeorm"
import { AppDataSource } from "../../../database/data-source"
import { NoticeClassRoom } from "../entity/NoticeClassRoom"
import { ICreateNoticeClassRoom, INoticeClasRoomRepository } from "./INoticeClassRoomRepository"


class NoticeClassRoomRepository implements INoticeClasRoomRepository{
  private noticeClassRoomRepository:Repository<NoticeClassRoom>
  constructor() {
    this.noticeClassRoomRepository = AppDataSource.getRepository("notice_class")
  }
  async create({ title, content }: ICreateNoticeClassRoom): Promise<NoticeClassRoom> {
    const newNotice = new NoticeClassRoom()
    Object.assign(newNotice, { title, content })
    await this.noticeClassRoomRepository.save(newNotice)
    return newNotice

  }

  async list(): Promise<NoticeClassRoom[]> {
    const allNotices = await this.noticeClassRoomRepository.find()
    return allNotices
  }

}

export {NoticeClassRoomRepository}