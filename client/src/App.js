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
                        <Route path="/login" exact component={Login} />
                        <Route path="/" exact component={Home} />
                            //if the home screen shows up first instead of the login screen then change the home screen path to "/home" and the login screen to "/"
                            //I should have this done with an authentication that it checks if you're logged in before bringing you to the home screen but I assume i
                            //didn't have time for that 
                    </Switch>
            </Container>
        </BrowserRouter>
    )
}

export default App;
