import { ListClassRoomController } from "../../../classRoom/useCases/listClassRoom/ListClassRoomController";
import { StudentRepository } from "../../repositories/StudentRepository";
import { ListStudentsController } from "./ListStudentsController";
import { ListStudentUseCase } from "./ListStudentUseCase";

const studentRepository = new StudentRepository
const listStudentUseCase = new ListStudentUseCase(studentRepository)
const listStudentController = new ListStudentsController(listStudentUseCase)


export {listStudentController}