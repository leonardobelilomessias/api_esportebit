import { Request, Response } from "express"
import { IClassRoom, ICreateClassRoomDTO } from "../../repositories/IClassRoomRepository"
import { CreateClassRoomUseCase } from "./CreateClassRoomUseCase"

class CreateClassRoomController{
  private classRoomUseCase: CreateClassRoomUseCase
  
  constructor(CreateClassRoomUseCase:CreateClassRoomUseCase) {
    this.classRoomUseCase = CreateClassRoomUseCase
  }
  async handle(request: Request, response: Response) {
    const {name,id_teacher} =request.body
    this.classRoomUseCase.execute({ name, id_teacher })
    return response.status(201).send()
  }
}

export {CreateClassRoomController}