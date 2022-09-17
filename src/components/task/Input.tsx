import {TextField} from "@mui/material";
import React from "react";
import Task from "../../services/task.service";

export const Input = () => {
  const [taskDescription, setTaskDescription] = React.useState('')

  const isEmptyField = (text: string): boolean => text === ''

  const dispatchAlert = () => {
    console.log('campo vazio')
  }

  const isValidEmptyField = (text: string) => {
    if(isEmptyField(text)) {
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
      if(isValidEmptyField(target.value)) {
        await task.create(target.value)
      }
    }
  }

  React.useEffect(() => {
    console.log(taskDescription)
  }, [taskDescription])

  return (
    <TextField fullWidth={true}
               variant="outlined"
               id="outlined-basic"
               label="Descreva sua tarefa e presione: enter"
               onKeyDown={onKeyPressed}
    />
  )
}