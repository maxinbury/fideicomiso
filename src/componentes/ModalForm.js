import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';


const currencies = [
  {
    value: 'CBU',
    label: 'CBU N°1',
  },
  {
    value: 'CBU',
    label: 'CBU N°2',
  },

];

export default function SelectTextFields() {
    const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [currency, setCurrency] = React.useState('EUR');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  const handleClick = () => {
    console.log('click');
    }

  return (
    
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
    <Button variant="outlined" onClick={handleClickOpen}>
        Subir comprobante
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
            <div>
            
                <TextField component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            
                id="outlined-select-currency"
                select
                label="CBU"
                value={currency}
                onChange={handleChange}
                helperText="Por favor ingrese su CBU"
                >
                {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                ))}
                </TextField>
                <Box
                component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField id="filled-basic" label="Monto" variant="filled" />
            </Box>
            <Box
                component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField id="filled-basic" label="Lote" variant="filled" />
            </Box>

            
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <TextField
                id="date"
                label="Fecha de pago"
                type="month"
                defaultValue="2020-01"
                sx={{ width: 220 }}
                InputLabelProps={{
                shrink: true,
                }}
            />
            </Box> 
            <Button onClick={handleClick} size="small" variant="contained">
                        Subir Comprobante
            </Button>
            
                </div>
        </DialogContent>
        </Dialog>
    </Box>

    
    
    
  );
}