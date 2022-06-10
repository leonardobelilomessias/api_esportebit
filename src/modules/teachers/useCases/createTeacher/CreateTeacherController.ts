import { Request, Response } from "express"
import { CreateTeacherUseCase } from "./CreateTeacherUseCase"

class CreateTeacherController{
  private createTeacherUseCase: CreateTeacherUseCase 
  constructor(createTacherUseCase) {
    this.createTeacherUseCase = createTacherUseCase
  }
  handle(request:Request,response:Response) :Response {
    const { name, description } = request.body
    this.createTeacherUseCase.execute({name,description})
    return response.status(201).send()
  }
}

export { CreateTeacherController } 
