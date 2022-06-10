import { json, Request, Response } from "express";
import { CreateStudentUseCase } from "./StudentUseCase";

interface IRequest{
  name: string
  old: number
  weight: number
  heigth: number 
  id_class: string
  id_teacher:string
}

class CreateStudentController{
  private createStudentUseCase: CreateStudentUseCase
  constructor(createStudentUsecase:CreateStudentUseCase) {
    this.createStudentUseCase = createStudentUsecase
  }
  async handle(request:Request,response:Response) {
    const { name, old, weight, heigth,id_class,id_teacher } :IRequest= request.body

    const student = await  this.createStudentUseCase.execute({ name, old, weight, heigth,id_class,id_teacher })
    return response.status(201).json(student)
    
  }

}

export {CreateStudentController}