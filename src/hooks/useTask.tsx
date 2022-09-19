import React from "react";
import {SkeletonProps} from "../components/task/task.types";
import {Skeleton} from "@mui/material";
import {AxiosResponse} from "axios";
import Task from "../services/task.service";
import {TaskProps} from "../global/types";

export const useTask = () => {
  const [tasks, setTasks] = React.useState<TaskProps[]>()
  const [isLoading, setIsloading] = React.useState<boolean>(false)
  const [hasError, setHasError] = React.useState<boolean>(false)
  const [taskDescription, setTaskDescription] = React.useState('')
  const task = new Task()

  const SkeletonForList = (props: SkeletonProps = {heigth: 40}) => {
    return (
      <div>
        <Skeleton key={0} height={props.heigth || ''}/>
        <Skeleton key={1} height={props.heigth || ''}/>
        <Skeleton key={2} height={props.heigth || ''}/>
        <Skeleton key={3} height={props.heigth || ''}/>
        <Skeleton key={4} height={props.heigth || ''}/>
      </div>
    )
  }

  function hasData(data: Promise<TaskProps[]>): boolean {
    if (data && Object.keys(data).length) {
      setHasError(true)
      return true
    }
    setHasError(false)
    return false
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

  const dispatchRequest = async (task = new Task()) => await task.listAll()

  const getData = async (isLoading = true) => {
    try {
      return await dispatchRequest()
        .then(async (resolve: AxiosResponse): Promise<AxiosResponse> => {
          hasData(resolve.data)
          return resolve
        })
        .then(async (resolve: AxiosResponse) => {
          const _tasks = await sanitizeData(resolve)
          setTasks(_tasks)
        })
        .catch((error) => {
          console.log('erro: ', error)
        })
        .finally(() => {
          !hasError && isLoading && setIsloading(false)
        })
    } catch (error) {
      console.error(error)
      setHasError(true)
    }
  }

  // Input

  const isEmptyField = (text: string): boolean => text === ''

  const dispatchAlert = async () => {
    console.log('campo vazio')
    return true
  }

  const isValidEmptyField = async (text: string): Promise<boolean> => {
    const isEmpty = isEmptyField(text) && await dispatchAlert()
    !isEmpty && setTaskDescription(text)
    return true
  }

  const validateField = async (target: HTMLInputElement) => {
    return await isValidEmptyField(target.value) && false
  }

  const onKeyPressed = async (_onKeyDown: React.KeyboardEvent<HTMLDivElement>) => {
    const target = _onKeyDown.target as HTMLInputElement
    _onKeyDown.code == 'Enter' && await validateField(target)
    await validateField(target).finally(async () => {
      await task.create({description: String(target.value)})
    })
  }

  React.useEffect(() => {
    console.log(taskDescription)
  }, [taskDescription])

  React.useEffect(() => {
    !isLoading && getData(true)
  }, [])
  React.useEffect(() => {
    console.log(hasError)
  }, [hasError])

  React.useEffect(() => {
    console.log('isLoading: ', isLoading)
  }, [isLoading])

  React.useEffect(() => {
    console.log("tarefas: ", tasks)
  }, [tasks])

  React.useEffect(() => {
    setIsloading(false)
  })

  return {
    listing: {
      isLoading,
      tasks: {all: tasks},
    },
    input: {onKeyPressed},
    SkeletonForList
  }
}