import React from 'react'
import { Container } from '@material-ui/core'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import PrimarySearchAppBar from './components/appBar/appBar'
import Home from './components/Home/Home'
import Login from './components/Login/Login'

const App = () => {
    return (
        <BrowserRouter>
            <Container maxWidth="xl">
                <PrimarySearchAppBar />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/login" exact component={Login} />
                    </Switch>
            </Container>
        </BrowserRouter>
    )
}

export default App;