import {
  Checkbox,
  styled,
  Typography,
  Unstable_Grid2 as Grid
} from "@mui/material";
import React from "react";
import {TaskProps} from "../../global/types";
import {RadioButtonUnchecked} from "@mui/icons-material";
import {colors} from "../../global/colors";
import {addToMassDeletion, deleteTask, fetchTasks, deleteMany, setHasSelectedTask} from "../../features/task/taskSlice";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {listStyle} from "./style";


export const TaskList = () => {
  const dispatch = useAppDispatch()
  const isRefreshing = useAppSelector((state) => state.tasks.isRefreshing)
  const isDeleting = useAppSelector((state) => state.tasks.isDeleting)
  const tasks = useAppSelector((state) => state.tasks)
  const tasksToBeDeleted = useAppSelector((state) => state.tasks.toBeDeleted)

  const CheckButton = styled(RadioButtonUnchecked)(({theme: lightTheme}) => ({
    borderRadius: '80px',
    '&:hover': {
      cursor: 'pointer',
      color: colors.lightGreen,
      backgroundColor: colors.lightGreen,
      border: 'none'
    },
  }));


  React.useEffect(() => {
    dispatch(fetchTasks())
  }, [isRefreshing, isDeleting])

  return (
    <React.Fragment>
      <button onClick={() => dispatch(deleteMany(tasksToBeDeleted))}>
        deletar
      </button>
      <Grid>
        {tasks.all.map((task: TaskProps) => {
          return (
            <Grid key={task.id} sx={listStyle}>
              <Checkbox //onChange={(): void => { dispatch(addToMassDeletion(task.id))}}
                        onClick={(checkbox: any) => {
                          dispatch(setHasSelectedTask({
                            status: checkbox.target.checked, taskId: task.id
                          }))
                        }}
              />
              <Typography>
                {task.description}
              </Typography>
            </Grid>
          )
        })}
      </Grid>
    </React.Fragment>
  )
}