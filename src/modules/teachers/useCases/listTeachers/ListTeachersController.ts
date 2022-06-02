import { Request, Response } from "express";
import { ListTeachersUseCase } from "./ListTachersUseCase";


class ListTeachersController{
  private listTeachersUseCase :ListTeachersUseCase
  constructor(ListTeachersUseCase) {
    this.listTeachersUseCase =  ListTeachersUseCase
  }
  handle(request:Request ,response:Response):Response {
    const all = this.listTeachersUseCase.execute()
    return response.json(all)
  }
}

export { ListTeachersController }
