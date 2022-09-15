import {mainContainer} from "./style";
import {Checkbox, Container, Paper, TextField, Typography, Unstable_Grid2 as Grid} from "@mui/material";
import {FileCopy, Menu, Print, Save, Share} from "@mui/icons-material";
import React from "react";
import API from "./services/api.service";
import {AxiosResponse} from "axios";

export default function App() {
    const actions = [
        {icon: <FileCopy/>, name: 'Copy'},
        {icon: <Save/>, name: 'Save'},
        {icon: <Print/>, name: 'Print'},
        {icon: <Share/>, name: 'Share'},
    ];
    React.useEffect(() => {
        const response = API.post<AxiosResponse>('/task/new', {title: 'asqwed', description: 'awqesd', status: 'toqwedo'})
        response.then((resolve) => {
            console.log('resolve:', resolve)
        }).catch((error) => {
            console.log(error)
        })
    }, [])
    return (<main style={mainContainer}>
        <Container maxWidth='lg'>
            <Grid container direction='column' rowGap={1}>
                <TextField fullWidth={true} id="outlined-basic" label="Descreva sua tarefa" variant="outlined"/>
                <Grid>
                    <Paper variant={'outlined'} sx={{padding: 1}} elevation={1}>
                        <section style={{display: 'grid', gridTemplateColumns: '.1fr 10fr .1fr', alignItems: 'center'}}>
                            <Checkbox size="small"/>
                            <Typography>
                                testando uma tarefa
                            </Typography>
                            <Menu/>
                        </section>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    </main>);
}