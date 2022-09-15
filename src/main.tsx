import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {createTheme, ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline"

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const lightTheme = createTheme({
    palette: {
        mode: 'light',
    },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<React.StrictMode>
    <ThemeProvider theme={lightTheme}>
        <CssBaseline/>
        <App/>
    </ThemeProvider>
</React.StrictMode>)
