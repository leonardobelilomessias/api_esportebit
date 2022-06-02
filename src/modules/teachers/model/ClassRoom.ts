import {v4 as uuidV4} from 'uuid'
class ClassRoom {
  id: string
  name: string
  teacherId: string
  constructor() {
    if (!this.id) {
      this.id = uuidV4()
    }
    
  }
}

export {ClassRoom}