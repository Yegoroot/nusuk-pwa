import { Box, Typography } from "@mui/material"
import { Link } from "react-router-dom";
import { HomeIcon } from "../assets/icons/HomeIcon";
import { PermitsIcon } from "../assets/icons/PemitsIcon";
import { ServicesIcon } from "../assets/icons/ServicesIcon";

export const NavMenu = () => {
  return <Box sx={{
    width: '100%', 
    p: 2,
    pb: 0,
    display: 'flex', 
    direction: 'rtl',
    justifyContent: 'space-between'
  }}>
  <Box>
    <Typography to="home" color={'textSecondary'} component={Link} sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 2,
      '& svg': {
        fontSize: 30
      }
    }}>
      <HomeIcon />
      الرئسية
    </Typography>
  </Box>
  <Box>
    <Typography color={'textPrimary'} to="/" component={Link} sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 1.5,
      '& svg': {
        fontSize: 30
      }
    }}>
      <PermitsIcon />
      التصاريخ
    </Typography>
  </Box>
  <Box>
    <Typography color={'textSecondary'} to="/" component={Link} sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 2,
      '& svg': {
        fontSize: 30
      }
    }}>
      <ServicesIcon />
      الخدمات
    </Typography>
  </Box>
</Box>
}