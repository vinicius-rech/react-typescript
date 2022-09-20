import React from "react";
import {AxiosResponse} from "axios";
import Task from "../services/task.service";
import {TaskProps} from "../global/types";

export const useTask = () => {
  const [isLoading, setIsloading] = React.useState<boolean>(false)
  const [isRefreshing, setIsRefreshing] = React.useState<boolean>(false)
  const task = new Task()

  const hasData = (data: Promise<TaskProps[]>): boolean => data && Object.keys(data).length > 0

  const updateIsRefreshing = (value: boolean) => {
    setIsRefreshing(value)
  }

  async function sanitizeData(
    response: AxiosResponse,
  ): Promise<TaskProps[]> {
    let sanitizedTasks: TaskProps[] = []
    response.data.forEach((task: TaskProps) => {
      sanitizedTasks.push(task)
    })

    return sanitizedTasks
  }

  const getAllTasks = async (task = new Task()) => await task.listAll()

  const createTask = async (description: string = '') => {
    const response = await task.create({description: String(description)})
    if (response.status === 201)
      return response
  }

  const _onKeyPressed = async (_onKeyDown: React.KeyboardEvent<HTMLDivElement>) => {
    const target = _onKeyDown.target as HTMLInputElement
    if (_onKeyDown.code == 'Enter' || _onKeyDown.code === 'NumpadEnter' && target.value.length > 0) {
      await createTask(target.value).finally(() => {
        target.value = ''
      })
    }
  }

  const deleteTask = async (id: string, element: HTMLElement, task = new Task()) => {
    console.log('to be deleted: ', id)
    const response = await task.delete(id)
    if (response.status === 201)
      console.log("element: ", element)
    return response
  }

  return {
    isLoading,
    isRefreshing,
    deleteTask,
    hasData,
    sanitizeData,
    getAllTasks,
    _onKeyPressed,
    updateIsRefreshing,
    createTask
  }
}