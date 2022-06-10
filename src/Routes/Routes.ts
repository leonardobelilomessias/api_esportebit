import { Router } from "express";
import { classRoomRoutes } from "./classRoom.routes";
import { student } from "./student.routes";
import { teacherRoutes } from "./teacher.routes";

const router = Router()

router.use("/teachers", teacherRoutes)
router.use("/classroom", classRoomRoutes)
router.use("/student", student)
router.use("/noticeclassroom")

export {router}