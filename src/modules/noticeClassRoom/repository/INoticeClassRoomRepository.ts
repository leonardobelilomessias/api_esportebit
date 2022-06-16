import { NoticeClassRoom } from "../entity/NoticeClassRoom"

interface ICreateNoticeClassRoom{
  title: string;
  content: string
  teacher: string
  classRoom: string
}


interface INoticeClasRoomRepository{

  create({title,content,teacher,classRoom}:ICreateNoticeClassRoom): Promise<NoticeClassRoom>
  list(): Promise<NoticeClassRoom[]>

}

export {INoticeClasRoomRepository,ICreateNoticeClassRoom}