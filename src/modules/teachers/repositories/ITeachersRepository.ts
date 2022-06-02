import { Teacher } from "../model/Teacher";



interface ICreateTeacherDTO{
  name: string;
  description: string
}
interface ITeachersRepository{

  list(): Teacher[];
  create({name , description}:ICreateTeacherDTO): void;
}

export {ITeachersRepository,ICreateTeacherDTO}