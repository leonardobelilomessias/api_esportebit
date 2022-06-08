import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm'
import {v4 as uuidV4} from 'uuid'
import { Teacher } from '../../teachers/entities/Teacher'

@Entity("classes")
class ClassRoom {

  @PrimaryColumn()
  id: string

  @Column()
  name: string

  @Column()
  id_teacher: string


  constructor() {
    if (!this.id) {
      this.id = uuidV4()
    }
    
  }
}

export {ClassRoom}