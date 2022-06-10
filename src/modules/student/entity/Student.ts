import { Column, Entity, PrimaryColumn } from 'typeorm';
import {v4 as uuidV4} from 'uuid'


interface StudentDTO{

}

@Entity("students")
class Student {
  @PrimaryColumn()
  id: string;

  @Column()
  old: number;

  @Column()
  name: string;

  @Column()
  weight: number;

  @Column()
  heigth: number;

  @Column()
  id_class: string;

  @Column()
  id_teacher: string
  
  @Column()
  id_imc: string;


  constructor() {
    if (!this.id) {
      this.id = uuidV4()
    }
    if (this.weight > 70) {
      this.id_imc = "3"
    }  
    if (this.weight < 70 && this.weight > 60) {
      this.id_imc="2"
    }
    if (this.weight < 60) {
      this.id_imc ="1"
    }
  }
}

export {Student}