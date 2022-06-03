
import { TeacherRepository } from "../../repositories/TeacherRepository";
import { CreateTeacherController } from "../createTeacher/CreateTeacherController";
import { ListTeachersUseCase } from "./ListTachersUseCase";
import { ListTeachersController } from "./ListTeachersController";

const teacherRepository = new TeacherRepository()
const listTeachersUseCase = new ListTeachersUseCase(teacherRepository)
const listTeachersController= new ListTeachersController(listTeachersUseCase)

export {listTeachersController}