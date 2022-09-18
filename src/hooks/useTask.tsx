import React from "react";
import {SkeletonProps} from "../components/task/task.types";
import {Skeleton} from "@mui/material";
import {AxiosResponse} from "axios";
import Task from "../services/task.service";

export type SingleTaskProps = {
  id: number,
  description: string
}

export const useTask = () => {
  const [tasks, setTasks] = React.useState<Array<{}>>()
  const [isLoading, setIsloading] = React.useState<boolean>(false)
  const [hasError, setHasError] = React.useState<boolean>(false)
  const [taskDescription, setTaskDescription] = React.useState('')


  const SkeletonForList = (props: SkeletonProps) => {
    return (
      <React.Fragment>
        <Skeleton key={0} height={props.heigth || ''}/>
        <Skeleton key={1} height={props.heigth || ''}/>
        <Skeleton key={2} height={props.heigth || ''}/>
        <Skeleton key={3} height={props.heigth || ''}/>
        <Skeleton key={4} height={props.heigth || ''}/>
      </React.Fragment>
    )
  }

  async function hasData(data: Promise<[{}]>) {
    if (await data && Object.keys(data).length) {
      setHasError(true)
      return true
    }
    return false
  }

  const sanitizeData = async (response: AxiosResponse) => {
    let newTasks = [{}]
    response.data.forEach((task: {}) => {
      newTasks.push(task)
    })
    return newTasks
  }

  const dispatchReq = async () => {
    const service = new Task()
    const response = await service.listAll()
    console.log('type: ', typeof response, 'response: ', response)
    return response
  }

  const getData = async (isLoading = true) => {
    console.log('data')
    try {
      const response = await dispatchReq()
      const data = await sanitizeData(response)
      await hasData(data) && setTasks(data)
      isLoading && setIsloading(false)
    } catch (error) {
      console.error(error)
      setHasError(true)
    }
  }

  // Input

  const isEmptyField = (text: string): boolean => text === ''

  const dispatchAlert = () => {
    console.log('campo vazio')
  }

  const isValidEmptyField = (text: string) => {
    if (isEmptyField(text)) {
      dispatchAlert()
      return false
    }
    setTaskDescription(text)
    return true
  }

  const onKeyPressed = async (_onKeyDown: React.KeyboardEvent<HTMLDivElement>) => {
    const target = _onKeyDown.target as HTMLInputElement
    if (_onKeyDown.code == 'Enter') {
      const task = new Task()
      if (isValidEmptyField(target.value)) {
        await task.create({description: String(target.value)})
      }
    }
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
    skeleton: {showSkeleton: SkeletonForList}
  }
}