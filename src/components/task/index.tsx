import {
  Container,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
  Unstable_Grid2 as Grid
} from "@mui/material";
import React from "react"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {Input} from "./Input";
import {colors} from "../../global/colors";
import {TaskList} from "./TaskList";

export const Task = () => {
  return (
    <React.Fragment>
      <Container maxWidth='lg'>
        <Grid container direction='column' rowGap={1}>
          asd
          {/*<Input/>*/}
          <TaskList/>
        </Grid>

      </Container>
      {/*<SpeedDial*/}
      {/*  ariaLabel="SpeedDial basic example"*/}
      {/*  sx={{position: 'absolute', bottom: 16, right: 16}}*/}
      {/*  icon={<SpeedDialIcon/>}*/}
      {/*>*/}
      {/*  <SpeedDialAction*/}
      {/*    key={"Nova tarefa"}*/}
      {/*    icon={<DeleteForeverIcon sx={{color: colors.grenadier}}/>}*/}
      {/*    tooltipTitle={"limpar tarefas"}*/}
      {/*  />*/}
      {/*</SpeedDial>*/}
    </React.Fragment>
  )
}