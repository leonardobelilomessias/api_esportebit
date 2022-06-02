import { TeacherRepository } from "../../repositories/TeacherRepository";
import { CreateTeacherController } from "./CreateTeacherController";
import { CreateTeacherUseCase } from "./CreateTeacherUseCase";

const teacherRepository = new TeacherRepository()
const createTacherUseCase =  new CreateTeacherUseCase(teacherRepository)
const createTeacherController = new CreateTeacherController(createTacherUseCase)

export { createTeacherController }
