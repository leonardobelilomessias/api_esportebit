import { getRepository, Repository } from "typeorm"
import { AppDataSource } from "../../../database/data-source"
import { Teacher } from "../../teachers/entities/Teacher"
import { ClassRoom } from "../entity/ClassRoom"
import { IClassRoom, ICreateClassRoomDTO } from "./IClassRoomRepository"



class ClassRoomRepository implements IClassRoom{

  private classRoomRepository: Repository<ClassRoom>

  constructor() {
    this.classRoomRepository = AppDataSource.getRepository(ClassRoom) 
  }

  async create({name,id_teacher}:ICreateClassRoomDTO):Promise<void> {
    const classRoom = new ClassRoom()

    Object.assign(classRoom,{name,id_teacher})

    await this.classRoomRepository.save(classRoom)
  }

  async list(): Promise<ClassRoom[]> {
    const all = await this.classRoomRepository.find()
    return all
  }

  async findByName(name:string) {
    const classRoomExist = await this.classRoomRepository.createQueryBuilder("classes")
    .where("name = :name", { name: name })
    .getOne()
    
    return classRoomExist
  }

}

export {ClassRoomRepository}