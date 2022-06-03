import { Teacher } from "../../model/Teacher";



interface ICreateTeacherDTO{
  name: string;
  description: string
}
interface ITeachersRepository{

  list(): void;
  create({name , description}:ICreateTeacherDTO): void;
}

export {ITeachersRepository,ICreateTeacherDTO}