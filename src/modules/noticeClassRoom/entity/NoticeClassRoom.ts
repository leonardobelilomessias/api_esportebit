import { Column, Entity, PrimaryColumn } from "typeorm";
import {v4 as uuidv4} from 'uuid'
@Entity("notice_class")
class NoticeClassRoom{

  @PrimaryColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  classRoom: string
  
  @Column()
  teacher: string;
  constructor() {
    if(!this.id) {
      this.id = uuidv4()
    }
  }
    


}
export {NoticeClassRoom}