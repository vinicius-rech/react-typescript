import {
  Paper,
  styled,
  Typography,
  Unstable_Grid2 as Grid
} from "@mui/material";
import React from "react";
import {TaskProps} from "../../global/types";
import {Check, RadioButtonUnchecked} from "@mui/icons-material";
import {colors} from "../../global/colors";
import {deleteTask, fetchTasks} from "../../features/task/taskSlice";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";


export const TaskList = () => {
  const dispatch = useAppDispatch()
  const tasks = useAppSelector((state) => state.tasks)
  const isRefreshing = useAppSelector((state) => state.tasks.isRefreshing)
  const CheckButton = styled(RadioButtonUnchecked)(({theme: lightTheme}) => ({
    borderRadius: '80px',
    '&:hover': {
      cursor: 'pointer',
      color: colors.lightGreen,
      backgroundColor: colors.lightGreen,
      border: 'none'
    },
  }));

  const listStyle = {
    display: 'grid',
    gridTemplateColumns: '11.6fr .4fr',
    alignItems: 'center'
  }

  React.useEffect(() => {
    dispatch(fetchTasks())
  }, [isRefreshing])


  return (
    <React.Fragment>
      <Grid>
        {tasks.all.map((task: TaskProps) => {
          return <Paper key={task.id}
                        variant={'outlined'}
                        sx={{margin: 1}}
          >
            <li style={listStyle}>
              <Typography>
                {task.description}
              </Typography>
              <CheckButton sx={{height: '20px'}}
                           aria-label="complete"
                           onClick={() => dispatch(deleteTask({id: task.id}))}
              >
                <Check/>
              </CheckButton>
            </li>
          </Paper>
        })}
      </Grid>
    </React.Fragment>
  )
}