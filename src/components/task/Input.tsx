import {TextField} from "@mui/material";
import React from "react";
import {useTask} from "../../hooks/useTask";

export const Input = () => {
  const {_onKeyPressed, updateIsRefreshing} = useTask()

  return (
    <TextField fullWidth={true}
               sx={{marginTop: 2}}
               variant="outlined"
               id="outlined-basic"
               label="Descreva sua tarefa e presione: enter"
               onKeyDown={async (e: React.KeyboardEvent<HTMLDivElement>) => {
                 await _onKeyPressed(e).then(() => updateIsRefreshing(true))
               }}
    />
  )
}