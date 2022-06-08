import { Router } from "express";
import { classRoomRoutes } from "./classRoom.routes";
import { teacherRoutes } from "./teacher.routes";

const router = Router()

router.use("/teachers", teacherRoutes)
router.use("/classroom",classRoomRoutes)

export {router}