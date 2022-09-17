import {TextField} from "@mui/material";
import React from "react";

export const Input = () => {
  const [taskDescription, setTaskDescription] = React.useState('')

  const isEmptyField = (text: string): boolean => text === '' ? true : false

  const dispatchAlert = () => {
    console.log('campo vazio')
  }

  const validateEmptyField = (text: string) =>
    isEmptyField(text) ? dispatchAlert() : setTaskDescription(text)


  const onKeyPressed = (_onKeyDown: React.KeyboardEvent<HTMLDivElement>) => {
    const target = _onKeyDown.target as HTMLInputElement
    if (_onKeyDown.code == 'Enter') {
      validateEmptyField(target.value)
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