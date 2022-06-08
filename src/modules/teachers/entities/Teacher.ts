import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import {v4 as uuidV4} from 'uuid'
import { ClassRoom } from '../../classRoom/entity/ClassRoom';

@Entity("teachers")
class Teacher{

  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @OneToMany(() => ClassRoom, (classRoom) => classRoom.id_teacher)
    classRoom:ClassRoom[]

  
  constructor() {
    if (!this.id) {
      this.id = uuidV4()
    }
  }
}
export {Teacher}