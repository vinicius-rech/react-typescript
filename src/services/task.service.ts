import {API} from "./api.service";
import {AxiosInstance, AxiosResponse} from "axios";
import {TaskProps} from "../global/types";

const endpoints = {
  create: '/task/new',
  listAll: 'task/all'
}

class Task {
  private api: AxiosInstance

  constructor() {
    this.api = API
  }

  async create(task: TaskProps) {
    await this.api.post<AxiosResponse>(endpoints.create, task.description)
      .then((response: AxiosResponse) => {
        console.log('resposta: ', response)
      })
      .catch((error) => {
        console.log('error',error)
      })
  }

  async listAll() {
    return await this.api.get<AxiosResponse<[]>>(endpoints.listAll)
  }
}

export default Task