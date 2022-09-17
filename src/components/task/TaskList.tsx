import {Checkbox, Paper, Typography, Unstable_Grid2 as Grid} from "@mui/material";
import {Menu} from "@mui/icons-material";
import React from "react";

export const TaskList = () => {
  return (
    <Grid>
      <Paper variant={'outlined'} sx={{padding: 1}}>
        <section style={{display: 'grid', gridTemplateColumns: '.1fr 10fr .1fr', alignItems: 'center'}}>
          <Checkbox size="small"/>
          <Typography>
            testando uma tarefa
          </Typography>
          <Menu/>
        </section>
      </Paper>
    </Grid>
  )
}