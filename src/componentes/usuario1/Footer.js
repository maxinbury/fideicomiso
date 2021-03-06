import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CssBaseline from '@mui/material/CssBaseline';
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import EmailSub from "./EmailSuscribe";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Divider from "@mui/material/Divider";
import logo from "../recursos/marcas.png";
import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';
import "./Footer.css" 
//Es ist auf Large Bildschirmen nicht centered. Falls Du das willst, entfer
export default function BoxSx() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));
  const islogo = {
    width: "200px",          
            
    };

  return (
  <ScopedCssBaseline>
    <Box
      padding={2}
      sx={{
        width: "100%",
        backgroundColor: "primary",
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={6}
        sx={{ px: 15 }}
      >
        <Grid item xs={12} lg={6}>
          <Grid
            paddingTop={5}
            container
            direction="column"
            justifyContent="center"
            spacing={1}
            alignItems={matches ? "flex-start" : "center"}
          >
            <Grid item xs={12}>
              <Typography variant="h5" component="div" gutterBottom color="#2196f3">
                Mantenete informado sobre nuestras novedades
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                sx={{ textAlign: matches ? null : "center" }}
                variant="subtitle1"
                component="h5"
                gutterBottom
              >
                Exclusivamente para vivienda ??nica familiar y de ocupaci??n permanente. Las medidas, descripciones, fotograf??as e ilustraciones son orientativas y provisorias. La tipolog??a, superficies y caracter??sticas de las unidades, as?? como los servicios generales y espacios comunes, est??n sujetos a modificaciones y replanteos que resulten de ajustes t??cnicos y/o requerimientos de las autoridades correspondientes. La tipolog??a ???casa unifamiliar??? comprende tanto casa unifamiliar como d??plex en propiedad horizontal.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <EmailSub />
            </Grid>
          </Grid>
        </Grid>
        {matches ? null : (
          <Grid item xs={12} sx={{ width: "100%" }}>
            <Divider variant="middle" />
          </Grid>
        )}
        <Grid item xs={12} lg={6}>
        <CssBaseline />
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems={matches ? "flex-start" : "center"}
            spacing={1}
            paddingLeft={50}
          >
            <Grid item xs={12}>
              <Typography variant="h5" component="h5" gutterBottom color="#2196f3">
                Unite a la Comunidad
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
              >
                <IconButton aria-label="delete">
                  <FacebookIcon />
                </IconButton>
                <IconButton aria-label="delete">
                  <InstagramIcon />
                </IconButton>
                <IconButton aria-label="delete">
                  <PinterestIcon />
                </IconButton>
                <IconButton aria-label="delete">
                  <TwitterIcon />
                </IconButton>
                <IconButton aria-label="delete">
                  <GitHubIcon />
                </IconButton>
              </Grid>
              <Grid item xs={12} spacing={2}>
                <img style={islogo} src={logo} alt="logo" />
              </Grid>
          
            </Grid>
            
            
          </Grid>
          
          
        </Grid>
          
      </Grid>
    
    </Box>
    </ScopedCssBaseline>
  );
}