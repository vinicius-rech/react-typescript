import {TextField} from "@mui/material";
import React from "react";
import {useTask} from "../../hooks/useTask";
import {addTask} from "../../features/task/taskSlice"
import {useAppDispatch} from "../../hooks/hooks";

export const Input = () => {
  const dispatch = useAppDispatch()
  const text = React.useRef<any>(null)
  const keys = {
    enter: 'Enter',
    numpadEnter: 'NumpadEnter'
  }

  const isEnterKeyPressed = (key: React.KeyboardEvent<HTMLInputElement>) => {
    let isEnterKey: boolean = key.code === keys.numpadEnter ? true : false
    return isEnterKey = key.code === keys.enter ? true : false
  }

  const handleKeyDown = (keyPressed: React.KeyboardEvent<HTMLInputElement>) => {
    isEnterKeyPressed(keyPressed)
    && dispatch(addTask({description: String(text)}))
      .finally(() => text.current.value = '')
  }

  React.useEffect(() => {
    console.log(text)
  }, [text])

  return (
    <TextField fullWidth={true}
               sx={{marginTop: 2}}
               variant="outlined"
               id="outlined-basic"
               label="Descreva sua tarefa e presione: enter"
               inputRef={text}
               onKeyDown={async (key: React.KeyboardEvent<HTMLInputElement>) => handleKeyDown(key)}
    />
  )
}