import React, { useState } from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { GoogleLogin } from 'react-google-login'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import useStyles from './styles'
import Input from './input'
import Icon from './icon'
import { signIn, signUp } from '../../actions/login'
import { LOGIN } from '../../constants/actionTypes'

const initialState = {firstName: '', lastName: '', email: '', password: '', confirmPassword: ''}

const Login = () => {
    const classes = useStyles();
    const [isSignUp, setIsSignUp] = useState(false);
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isSignUp) {
            dispatch(signUp(formData, history))
        } else {
            dispatch(signIn(formData, history))
        }
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value})
    }

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword)

    const switchMode = () => {
        setIsSignUp((prevIsSignUp) => !prevIsSignUp)
        handleShowPassword(false)
    }

    const googleSuccess = async (res) => {
        const result = res?.profileObj; //res.? means we won't get an error if we don't have the res object
        const token = res?.tokenId;

        try {
            dispatch({ type: LOGIN, data: { result, token } });

            history.push('/')
        } catch (error) {
            console.log(error)
        }
    }

    const googleFailure = (error) => {
        console.log(error)
        console.log("Google Sign In was unsuccessful. Try again later")
    }

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elavation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5">{isSignUp ? 'Sign Up' : 'Sign In'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2} >
                        { isSignUp && (
                                <>
                                    <Input name="firstName" label="First Name" handleChange={handleChange} autofocus half/>
                                    <Input name="lastName" label="Last Name" handleChange={handleChange} half/>
                                </>
                        )}
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                        { isSignUp && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />}
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        {isSignUp ? 'Sign Up' : 'Sign In'}
                    </Button>
                    <GoogleLogin 
                        clientId="527581560034-qo5vvh8qfjj8dsuh0vh4t43tqlrvau8k.apps.googleusercontent.com"
                        render={(renderProps) => (
                            <Button 
                            className={classes.googleButton} 
                            color='primary' 
                            fullWidth 
                            onClick={renderProps.onClick} 
                            disabled={renderProps.disabled} 
                            startIcon={<Icon />} 
                            variant="contained" 
                            >
                                Google Sign In
                            </Button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy="single_host_origin"
                    />
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Button onClick={switchMode}>
                                { isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up" }
                            </Button>   
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Login
