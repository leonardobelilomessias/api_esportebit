import { Repository } from "typeorm";
import { Teacher } from "../entities/Teacher";



interface ICreateTeacherDTO{
  name: string;
  description: string
}
interface ITeachersRepository{

  list(): Promise<Teacher[]>;
  create({name , description}:ICreateTeacherDTO): void;
}

export {ITeachersRepository,ICreateTeacherDTO}