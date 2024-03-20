import { Box } from "@mui/material"
import { Outlet } from "react-router-dom";
import { NavMenu } from "../components/NavMenu";

export const MainLayout = () => {
  return <>
    <Box sx={{ minHeight: '100vh',  p: 2, display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
  }}>


        <Outlet />

      <Box>
        <NavMenu />
      </Box>
    </Box>
  </>
}