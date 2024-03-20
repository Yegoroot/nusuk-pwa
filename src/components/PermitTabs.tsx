import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { IconButton } from '@mui/material';
import { Add } from '@mui/icons-material';




function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function PermitTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1,  alignItems: 'flex-end', direction: 'rtl', display: 'flex', justifyContent: 'space-between', borderColor: 'divider' }}>
        <Tabs  textColor="inherit" value={value} sx={{direction: 'rtl', pt: 2}} onChange={handleChange} >
          <Tab sx={{minWidth: '50px', px: '0px !important'}} label="الحالية" {...a11yProps(0)} />
          <Tab label="السابقة" {...a11yProps(1)} />
        </Tabs>
        <IconButton sx={{color: "#fff"}}>
          <Add sx={{height: '45px'}} />
        </IconButton>
      </Box>
      {/* <CustomTabPanel value={value} index={0}>
        Item One
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel> */}
    </Box>
  );
}