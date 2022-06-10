import { StudentRepository } from "../../repositories/StudentRepository";
import { CreateStudentController } from "./StudentController";
import { CreateStudentUseCase } from "./StudentUseCase";



const studentRepository = new StudentRepository()
const createStudentUseCase = new CreateStudentUseCase(studentRepository)
const createStudentController = new CreateStudentController(createStudentUseCase)

export{createStudentController}