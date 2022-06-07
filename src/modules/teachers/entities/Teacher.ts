import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import {v4 as uuidV4} from 'uuid'

@Entity("teachers")
class Teacher{

  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  

  
  constructor() {
    if (!this.id) {
      this.id = uuidV4()
    }
  }
}
export {Teacher}