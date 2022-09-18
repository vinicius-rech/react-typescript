import {TextField} from "@mui/material";
import React from "react";
import {useTask} from "../../hooks/useTask";

export const Input = () => {
  const {input} = useTask()

  return (
    <TextField fullWidth={true}
               variant="outlined"
               id="outlined-basic"
               label="Descreva sua tarefa e presione: enter"
               onKeyDown={input.onKeyPressed}
    />
  )
}