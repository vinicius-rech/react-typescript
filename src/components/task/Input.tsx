import {TextField} from "@mui/material";
import React from "react";

export const Input = () => {

  const onKeyPressed = (keyPressed: React.KeyboardEvent<HTMLDivElement>) => {
    keyPressed.code === 'Enter' && console.log('ok')
  }

  return (
    <TextField fullWidth={true}
               variant="outlined"
               id="outlined-basic"
               label="Descreva sua tarefa e presione: enter"
               onKeyDown={onKeyPressed}
    />
  )
}