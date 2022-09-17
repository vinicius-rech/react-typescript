import {API} from "./api.service";
import {AxiosInstance, AxiosResponse} from "axios";

const endpoints = {
  create: '/task/new'
}

class Task {
  private api: AxiosInstance

  constructor() {
    this.api = API()
  }

  async create(description: string) {
    await this.api.post<AxiosResponse>(endpoints.create, {description})
      .then((response:AxiosResponse) => {
        console.log('resposta: ', response)
      })
      .catch((error) => {
        console.log('error',error)
      })
  }
}

export default Task