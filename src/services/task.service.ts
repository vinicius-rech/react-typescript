import {API} from "./api.service";
import {AxiosInstance, AxiosResponse} from "axios";
import {TaskProps} from "../global/types";

const endpoints = {
  create: '/task/new',
  delete: '/task/delete',
  listAll: 'task/all'
}

class Task {
  private api: AxiosInstance

  constructor() {
    this.api = API
  }

  async create(task: TaskProps): Promise<AxiosResponse> {
    return await this.api.post(endpoints.create, task)
  }

  async delete(id: string): Promise<AxiosResponse> {
    return await this.api.delete(`${endpoints.delete}/${id}`)
  }

  async listAll(): Promise<AxiosResponse> {
    return await this.api.get<AxiosResponse<[{}]>>(endpoints.listAll)
  }
}

export default Task