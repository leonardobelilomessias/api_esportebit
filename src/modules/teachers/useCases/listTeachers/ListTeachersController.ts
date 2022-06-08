import { Request, Response } from "express";
import { ListTeachersUseCase } from "./ListTachersUseCase";


class ListTeachersController{
  private listTeachersUseCase :ListTeachersUseCase
  constructor(ListTeachersUseCase) {
    this.listTeachersUseCase =  ListTeachersUseCase
  }
  async handle(request:Request ,response:Response):Promise<Response> {
    const all = await this.listTeachersUseCase.execute()
    return response.status(200).json(all)
  }
}

export { ListTeachersController }
