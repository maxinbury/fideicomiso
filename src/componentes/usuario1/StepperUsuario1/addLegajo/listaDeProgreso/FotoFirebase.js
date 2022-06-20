import { CheckCircleOutline } from '@mui/icons-material';
import { Box, ImageListItem } from '@mui/material';
import React, {useEffect, useState} from 'react';
import PorcentajeDeProgreso from '../../PorcentajeDeProgreso';
import { v4 as uuidv4 } from 'uuid'
import uploadFotoFirebase from "../../../../../firebase/uploadFotoFirebase";

const ListaDeProgreso = ({file}) => {
    const [progress, setProgress] = useState(0);
    const [imageURL, setImageURL] = useState(null);
    useEffect(() => {
        const uploadImage = async () => {
            const imageName = uuidv4()  + "." + file.name.split(".").pop();
            try {
                const url = await uploadFotoFirebase(
                    file,
                    `fotos/${imageName}`,
                    imageName,
                    setProgress
                  );
          
                  setImageURL(null);
                } catch (error) {
                  console.log(error);
                   
                }
          
        };
        
              setImageURL(URL.createObjectURL(file));
              uploadImage();
            }, [file]);
            return (
              imageURL && (
                <ImageListItem cols={1} rows={1}>
                  <img src={imageURL} alt="gallery" loading="lazy" />
                  <Box sx={backDrop}>
                    {progress < 100 ? (
                      <PorcentajeDeProgreso value={progress} />
                    ) : (
                      <CheckCircleOutline
                        sx={{ width: 60, height: 60, color: 'lightgreen' }}
                      />
                    )}
                  </Box>
                </ImageListItem>
              )
            );
          };
          
          export default ListaDeProgreso;
          
          const backDrop = {
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(0,0,0, .5)',
          };