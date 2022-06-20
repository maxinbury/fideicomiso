


import { Close, Send } from '@mui/icons-material';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  TextField,
} from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { useValue } from '../../context/ContextProvider';
import GoogleOneTapLogin from './GoogleLogin';
import PasswordField from './PasswordField';

const Login = () => {
  const {
    state: { openLogin },
    dispatch,
  } = useValue();
  const [title, setTitle] = useState('Login');
  const [isRegister, setIsRegister] = useState(false);
  const nameRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const handleClose = () => {
    dispatch({ type: 'CLOSE_LOGIN' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // testing Loading
    dispatch({ type: 'START_LOADING' });

    setTimeout(() => {
      dispatch({ type: 'END_LOADING' });
    }, 6000);

    //testing Notification
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;
    if (password !== confirmPassword) {
      dispatch({
        type: 'UPDATE_ALERT',
        payload: {
          open: true,
          severity: 'error',
          message: 'La contraseña no coincide',
        },
      });
    }
  };

  useEffect(() => {
    isRegister ? setTitle('Registro') : setTitle('Ingresar');
  }, [isRegister]);
  return (
    <Dialog open={openLogin} onClose={handleClose}>
      <DialogTitle>
        {title}
        <IconButton
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            color: (theme) => theme.palette.grey[500],
          }}
          onClick={handleClose}
        >
          <Close />
        </IconButton>
      </DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent dividers>
          <DialogContentText>
          Para continuar, complete los siguientes campos:
          </DialogContentText>
          {isRegister && (
            <TextField
              autoFocus
              margin="normal"
              variant="standard"
              id="ID"
              label="ID CLIENTE"
              type="number"
              fullWidth
              helperText="Este campo es obligatorio"
              aria-errormessage='error'
              inputRef={nameRef}
              inputProps={{ minLength: 10 }}
              required
            />
          )}
          <TextField
            autoFocus={!isRegister}
            margin="normal"
            variant="standard"
            id="cuit"
            label="CUIT"
            type="number"
            fullWidth
            inputRef={nameRef}
            inputProps={{ minLength: 10 }}
            required
          />

          <PasswordField {...{ passwordRef }} />
          {isRegister && (
            <PasswordField
              passwordRef={confirmPasswordRef}
              id="confirmPassword"
              label="Confirmar contraseña"
            />
          )}
        </DialogContent>
        <DialogActions sx={{ px: '19px' }}>
          <Button type="submit" variant="contained" endIcon={<Send />}>
            Continuar
          </Button>
        </DialogActions>
      </form>
      <DialogActions sx={{ justifyContent: 'left', p: '5px 24px' }}>
        {isRegister
          ? '¿Ya tienes una cuenta? Ingresa ahora '
          : "¿No tienes una cuenta? Crea una ahora "}
        <Button onClick={() => setIsRegister(!isRegister)}>
          {isRegister ? 'Ingresar' : 'Registro'}
        </Button>
      </DialogActions>
      <DialogActions sx={{ justifyContent: 'center', py: '24px' }}>
        <GoogleOneTapLogin />
      </DialogActions>
    </Dialog>
  );
};

export default Login;