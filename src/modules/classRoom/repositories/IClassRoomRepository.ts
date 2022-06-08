import { ClassRoom } from "../entity/ClassRoom";

interface ICreateClassRoomDTO{

  name: string;
  id_teacher:string

}
interface IClassRoom{

  create({name,id_teacher}:ICreateClassRoomDTO): Promise<void>;
  list(): Promise<ClassRoom[]>;

}

export { IClassRoom,ICreateClassRoomDTO}