import { Request, Response } from "express"
import { ListStudentUseCase } from "./ListStudentUseCase"

class ListStudentsController{
private listStudentUseCase:ListStudentUseCase

  constructor(listStudentUseCase: ListStudentUseCase) {
    this.listStudentUseCase = listStudentUseCase
  }
  async handle(request: Request, response: Response): Promise<Response> {
    const students = await this.listStudentUseCase.execute()
    return response.status(200).json(students)
  }
}
export{ListStudentsController}