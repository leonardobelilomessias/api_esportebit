import { Request, Response } from "express"
import { ListNoticeClassRoomUseCase } from "./ListNoticeClassRoomUseCase"


class ListNoticeClassRoomController{
  private listNoticeClassRoomUseCase: ListNoticeClassRoomUseCase
  constructor(listNoticeClassRoomUseCase: ListNoticeClassRoomUseCase) {
    this.listNoticeClassRoomUseCase = listNoticeClassRoomUseCase
  }
  async handle(request:Request,response:Response): Promise<Response> {
    const allNoticesClassRoom = this.listNoticeClassRoomUseCase.execute()
    return response.status(200).json(allNoticesClassRoom)
  }

}
export {ListNoticeClassRoomController}