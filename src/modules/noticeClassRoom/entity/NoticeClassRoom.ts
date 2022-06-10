import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("notice_class")
class NoticeClassRoom{

  @PrimaryColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  class: string
  
  @Column()
  teacher: string;
      
    


}
export {NoticeClassRoom}