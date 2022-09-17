import {Container, Unstable_Grid2 as Grid} from "@mui/material";
import React from "react";
import {Input} from "./Input";
import {TaskList} from "./TaskList";

export const Task = () => {
  return (
    <Container maxWidth='lg'>
      <Grid container direction='column' rowGap={1}>
        <Input/>
        <TaskList/>
      </Grid>
    </Container>
  )
}