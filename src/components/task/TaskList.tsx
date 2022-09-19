import {Checkbox, Paper, Typography, Unstable_Grid2 as Grid} from "@mui/material";
import React from "react";
import {useTask} from "../../hooks/useTask";

export const TaskList = () => {
  const {listing, SkeletonForList} = useTask()

  return listing.isLoading
    ? <SkeletonForList />
    : (
      <Grid>
        {listing.tasks.all && listing.tasks.all.map((task: any, index) => {
          return (
            <Paper key={index} variant={'outlined'} sx={{padding: 1}}>
              <section style={{display: 'grid', gridTemplateColumns: '.1fr 10fr .1fr', alignItems: 'center'}}>
                <Checkbox size="small"/>
                <Typography>
                  {task?.description}
                </Typography>
              </section>
            </Paper>
          )
        })}
      </Grid>
    )
}