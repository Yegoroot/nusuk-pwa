import { Box, Button, Card, Divider, Typography } from "@mui/material"
// @ts-ignore
import umraVideo from "./../assets/video/umrah_pattern_render.mp4";
import PermitTabs from "../components/PermitTabs";
import { useEffect, useRef, useState } from "react";
import { useContainerDimensions } from "../hooks/useContainerDimensions";
import { useSettings } from "../context/useSettings";

export const PermtsScreen = () => {

  const {settings} = useSettings()
  

  return <Box>

      <Box sx={{
        pt: 1.5,
        display: 'flex',
        justifyContent: 'flex-end'
        }}>


      <Button variant="contained">
        العمرة والروضة الشريفة
      </Button>
    </Box>

    <PermitTabs />
        <Box   sx={{margin: 'auto', position: 'relative', width: '100%', display: 'flex', justifyContent: 'center'}}>

        <Card sx={{background: '#594f41', maxWidth: '300px', mt: 4, width: "90%" }}>
    <video  width="100%" autoPlay muted loop>
          <source src={umraVideo} type="video/mp4" />
        </video>

          <Box sx={{ position: 'absolute', maxWidth: '300px', bottom: 80, width: '100%', textAlign: 'center'}}>
          <Typography sx={{color: '#feeedb'}}>{settings.name}</Typography>
          <Typography sx={{ color: '#c3ac8c', pt: 1.5}}>العمرة</Typography>
          </Box>

          <Box sx={{position: 'absolute', width: '90%', maxWidth: '300px',
           bottom: -8,}}>

          <Divider sx={{borderColor: '#775d44',      }}/>
          <Typography sx={{direction: 'rtl', 
           fontSize: 14, 
            right: 15,
           color: '#c3ac8c',
            width: '100%', p: 2, pt: 1}}>{settings.date} <span>2024</span></Typography>
          
          </Box>
        </Card>
        <img alt="s" style={{
          width: 100,
          top: settings.topQR,
          position: 'absolute',
          height: 100
        }} src="/images/qr.webp" />


        </Box>
  

  </Box>
}