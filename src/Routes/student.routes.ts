
import { Router } from "express";
import { createStudentController } from "../modules/student/useCase/createStudent";
import { listStudentController } from "../modules/student/useCase/listStudent";

const student = Router()

student.get("/", (request,response) => {
  listStudentController.handle(request,response)
})

student.post("/", (request, response) => {
  createStudentController.handle(request,response)
})

export{student}