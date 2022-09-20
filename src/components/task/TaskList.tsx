import {
  Alert,
  Paper,
  Snackbar,
  styled,
  Typography,
  Unstable_Grid2 as Grid
} from "@mui/material";
import React, {useEffect} from "react";
import {useTask} from "../../hooks/useTask";
import {AxiosResponse} from "axios";
import {TaskProps} from "../../global/types";
import {Check, RadioButtonUnchecked} from "@mui/icons-material";
import {colors} from "../../global/colors";
import {useDispatch} from "react-redux";
import {fetchTasks, TaskInitialState} from "../../features/task/taskSlice";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {SourceState} from "../../store";


export const TaskList = () => {
  const dispatch = useAppDispatch()
  const tasks = useAppSelector((state) => state.tasks)
  const isLoading = useAppSelector((state) => state.tasks.isLoading)
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
  }, [])

  return (
    <React.Fragment>

      {!isLoading && tasks.tasks.length > 0 && (
        <Grid>
          <Paper key={1}
                 variant={'outlined'}
                 sx={{margin: 1}}
          >
            <li style={{display: 'grid', gridTemplateColumns: '11.6fr .4fr', alignItems: 'center'}}>
              <Typography>
                {/*{task?.description}*/}
              </Typography>
              <CheckButton sx={{height: '20px'}} aria-label="complete"
                // onClick={async (element: any) => {
                //   await handleOnDelete(task.id, element)
                // }}
              >
                <Check/>
              </CheckButton>
            </li>
          </Paper>
          {/*<Snackbar open={open} autoHideDuration={1700} onClose={handleClose}>*/}
          {/*  <Alert onClose={handleClose} severity="success" sx={{width: '100%'}}>*/}
          {/*    {isTaskCreated && "Tarefa concluida!"}*/}
          {/*    {isTaskDeleted && "Tarefa criada!"}*/}
          {/*  </Alert>*/}
          {/*</Snackbar>*/}
        </Grid>

      )}

    </React.Fragment>
  )
}