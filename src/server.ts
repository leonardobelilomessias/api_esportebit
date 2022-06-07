import express from 'express'; 
import { teacherRoutes } from './Routes/Routes';
import "./database/data-source"
import "reflect-metadata"
const app = express()
app.use(express.json())
app.get("/", (request, response) => {
  return response.json({message:"thats ok! onde more"})
})
app.use("/teachers",teacherRoutes)
app.listen(3333, () => {
  console.log('Server running')
})
