import { NoticeClassRoom } from "../entity/NoticeClassRoom"

interface ICreateNoticeClassRoom{
  title: string;
  content:string
}


interface INoticeClasRoomRepository{

  create({title,content}:ICreateNoticeClassRoom): Promise<NoticeClassRoom>
  list(): Promise<NoticeClassRoom[]>

}

export {INoticeClasRoomRepository,ICreateNoticeClassRoom}