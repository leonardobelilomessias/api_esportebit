import { Request, Response } from "express"
import { CreateNoticeClassRoomUseCase } from "./CreateNoticeClassRoomUseCase"

interface IRequest{
  title: string;
  content:string
}

class CreateNoticeClassRoomController{
  private createNoticeClassRoomUseCase: CreateNoticeClassRoomUseCase
  
  constructor(createNoticeClassRoomUseCase:CreateNoticeClassRoomUseCase) {
    this.createNoticeClassRoomUseCase = createNoticeClassRoomUseCase
  }
  async handle(request: Request, response: Response):Promise<Response> {
     const {title,content}:IRequest = request.body
    const newNotice = await this.createNoticeClassRoomUseCase.execute({title,content})
    return response.status(201).json(newNotice)
  }
}

export {CreateNoticeClassRoomController}