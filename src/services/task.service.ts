import {API} from "./api.service";
import {AxiosInstance, AxiosResponse} from "axios";

const taskRoutes = {
  create: '/task'
}

class Task {
  private api: AxiosInstance

  constructor() {
    this.api = API()
  }

  create(task: Task) {
    return this.api.post<AxiosResponse<Task>>(taskRoutes.create, task)
  }
}

export default Task