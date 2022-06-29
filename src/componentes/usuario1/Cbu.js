import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import {Button, List} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ContactsIcon from '@mui/icons-material/Contacts';
import { TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Divider from '@mui/material/Divider';




export default function CBUCard() {
 

  return (
    <Card sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
      <CardHeader
        

        title="Oscar Gomez"
        subheader="Fecha de ingreso"
      />
      <ContactsIcon sx={{fontSize:80}}/>
      <CardMedia
        component= "i"
        height="194"
        image= "<ContactsIcon/>"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Detalles del CBU
        </Typography>
        <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
      }}
    >
       <TextField
        id="filled-basic"
        label="Numero" 
        variant="filled"
        >
        </TextField>
      <Divider variant="inset" component="li" />
      <TextField
        id="filled-basic"
        label="Estado" 
        variant="filled"
        >
        </TextField>
      <Divider variant="inset" component="li" />
      <TextField
        id="filled-basic"
        label="Propio" 
        variant="filled"
        >
        </TextField>
    </List>
        
        
      </CardContent>
      <CardActions disableSpacing>
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Eliminar
      </Button>
      <Button variant="outlined" startIcon={<AddCircleIcon />}>
        Asociar
      </Button>
      </CardActions>
      
    </Card>
  );
}
