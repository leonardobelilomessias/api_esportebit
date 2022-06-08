import { Request, Response, response } from "express"
import { ListClassRoomUseCase } from "./ListClassRoomUseCase"


class ListClassRoomController{
  private listClassRoomUseCase: ListClassRoomUseCase
  constructor(ListClassRoomUseCase:ListClassRoomUseCase) {
    this.listClassRoomUseCase = ListClassRoomUseCase
  }
  async handle(request:Request,response:Response) {
    const allClass = await this.listClassRoomUseCase.execute()
    return response.status(200).json(allClass)
  }
}

export {ListClassRoomController}