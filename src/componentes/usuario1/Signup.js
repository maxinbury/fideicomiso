import AddCircleOutlineOutlinedIcon  from '@mui/icons-material/AddCircleOutlineOutlined';
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@mui/material';
import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';

const Singup = () => {
const paperStyle = {padding: '30px 20px', width:300, margin: '20px auto'};
const headerStyle = {margin:0};
const avatarStyle = {backgroundColor: '#2196f3'};
const marginTop = {marginTop:5};

    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align="center">
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlinedIcon/>
                    </Avatar>
                    <h2 style={headerStyle}>Registro</h2>
                    <Typography variant='caption' gutterBottom> Por favor rellena todos los campos para crear tu cuenta</Typography>
                </Grid>
                <form>
                    <TextField fullWidth label='Nombre' placeholder="Ingresa tu nombre" />
                    <TextField fullWidth label='Apellido' placeholder="Ingresa tu apellido" />
                    <TextField fullWidth label='Email' placeholder="Ingresa tu email" />
                    <FormControl component="fieldset" style={marginTop}>
                        <FormLabel component="legend">Genero</FormLabel>
                        <RadioGroup aria-label="genero" name="genero" style={{ display: 'initial' }}>
                            <FormControlLabel value="femenino" control={<Radio />} label="Femenino" />
                            <FormControlLabel value="masculino" control={<Radio />} label="Masculino" />
                        </RadioGroup>
                    </FormControl>
                    <TextField fullWidth label='Numero de Telefono' placeholder="Enter your phone number" />
                    <TextField fullWidth label='Contraseña' placeholder="Enter your password"/>
                    <TextField fullWidth label='Repetir Contraseña' placeholder="Confirm your password"/>
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="Acepto los terminos y condiciones."
                    />
                    <Button type='submit' variant='contained' color='primary'>Registrarme
                    </Button>
                </form>


            </Paper>
        </Grid>
    )
}

export default Singup;