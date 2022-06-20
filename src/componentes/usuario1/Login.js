import React from 'react'
import axios from 'axios'
import { useState } from 'react';
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const Login = () => {
    /* const [cuil, setCuil] = useState('');
    const [password, setPassword] = useState('');

    const handleUserName = (e) => {
        console.log(e.target.value)
        setCuil(e.target.value)
    }
    
        
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8080/login', {
            cuil: cuil,
            password: password

        })
        .then((response) => {
            console.log(response.data)
            alert('Login Successful')

        })
        .catch((error) => {
            console.log(error)
            alert('Login Failed')
        }) */
        const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
        const avatarStyle={backgroundColor:'#2196f3'}
        const btnstyle={margin:'8px 0'}
        
    

    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Ingresar</h2>
                </Grid>
                <TextField label='cuil' placeholder='Enter cuil' fullWidth required/>
                <TextField label='password' placeholder='Enter password' type='password' fullWidth required/>
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 />
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                <Typography >
                     <Link href="#" >
                        Forgot password ?
                </Link>
                </Typography>
                <Typography > Do you have an account ?
                     <Link href="#" >
                        Sign Up 
                </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login;