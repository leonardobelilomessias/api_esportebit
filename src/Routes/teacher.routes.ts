import { Router } from "express";
import { TeacherRepository } from "../modules/teachers/repositories/TeacherRepository";
import { createTeacherController } from "../modules/teachers/useCases/createTeacher";
import { CreateTeacherUseCase } from "../modules/teachers/useCases/createTeacher/CreateTeacherUseCase";
import { listTeachersController } from "../modules/teachers/useCases/listTeachers";

const teacherRoutes = Router()
const teacherRepository = new TeacherRepository()

teacherRoutes.post("/", (request, response) => {
 createTeacherController.handle(request,response)
})

teacherRoutes.get("/", (request, response) => {

  listTeachersController.handle(request,response)

})
export{teacherRoutes} 