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
import {useDispatch, useSelector} from "react-redux";
import {fetchTasks, TaskState} from "../../features/task/taskSlice";


export const TaskList = () => {
  // const {getAllTasks, deleteTask, createTask, sanitizeData, hasData, isRefreshing} = useTask()
  // const [tasks, setTasks] = React.useState<TaskProps[]>()
  // const [hasError, setHasError] = React.useState<boolean>(false)
  // const [open, setOpen] = React.useState<boolean>(false)
  // const [isTaskCreated, setIsTaskCreated] = React.useState<boolean>(false)
  // const [isTaskDeleted, setIsTaskDeleted] = React.useState<boolean>(false)
  const dispatch = useDispatch()
  const tasks = useSelector((state: TaskState) => state.tasks)
  const isLoading = useSelector((state: TaskState) => state.isLoading)
  const CheckButton = styled(RadioButtonUnchecked)(({theme: lightTheme}) => ({
    borderRadius: '80px',
    '&:hover': {
      cursor: 'pointer',
      color: colors.lightGreen,
      backgroundColor: colors.lightGreen,
      border: 'none'
    },
  }));
  // const handleClick = () => {
  //   setOpen(true);
  // };
  // const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
  //   if (reason === 'clickaway') {
  //     return;
  //   }
  //
  //   setOpen(false);
  // };
  // const getData = async () => {
  //   console.log('caiu?')
  //   try {
  //     await getAllTasks()
  //       .then(async (resolve: AxiosResponse): Promise<AxiosResponse> => {
  //         !hasData(resolve.data) && setHasError(true)
  //         console.log('reera')
  //         return resolve
  //       })
  //       .then(async (resolve: AxiosResponse) => {
  //         if (hasError) throw new TypeError('Nenhum registro encontrado')
  //         const _tasks = await sanitizeData(resolve)
  //         setTasks(_tasks)
  //       })
  //       .catch((error: TypeError) => {
  //         console.log('erro: ', error)
  //       })
  //       .finally(() => console.log('final'))
  //   } catch (error) {
  //     console.error(error)
  //     setHasError(true)
  //   }
  // }
  // const handleOnDelete = async (id: string, element: any) => {
  //   setOpen(false)
  //   await deleteTask(id, element)
  //     .then(async () => await getData())
  //     .then(() => setOpen(true))
  // }

  // const handleCreateTask = async () => {
  //    const response = await createTask()
  //   console.log('asd')
  //    if(response.status === 201) console.log('criou')
  // }

  // React.useEffect(() => {
  //   console.log('mudou')
  //   isTaskCreated && handleCreateTask()
  // }, [isTaskCreated])
  //
  // React.useEffect(() => {
  //   isRefreshing && getData()
  // }, [isRefreshing])
  //
  // React.useEffect(() => {
  //   getData()
  // }, [])

  React.useEffect(() => {
    dispatch(fetchTasks())
  }, [])

  return (
    <React.Fragment>

      {!isLoading && tasks (
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