import React, {useEffect} from "react";
import './App.css'
import {AppBar, Button, Container, IconButton, Toolbar, Typography} from '@material-ui/core'
import {Menu} from '@material-ui/icons'
import {TodolistsList} from '../features/TodolistsList/TodolistsList'
import LinearProgress from "@material-ui/core/LinearProgress";
import {AppRootStateType, store} from "./store";
import {useDispatch, useSelector} from "react-redux";
import { RequestStatusType} from "./app-reducer";


function App() {


    const statusOfApp = useSelector<AppRootStateType,RequestStatusType>(state => state.app.status)


    return (
        <div className="App">
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <Menu/>
                    </IconButton>
                    <Typography variant="h6">
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>

            {statusOfApp === "loading" && <LinearProgress color="secondary" />}

            <Container fixed>
                <TodolistsList/>
            </Container>
        </div>
    )
}

export default App
