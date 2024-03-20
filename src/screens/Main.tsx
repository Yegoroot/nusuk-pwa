import { Box, Button, TextField } from "@mui/material";

import { useSettings } from "../context/useSettings";

export default function HomeScreen() {

  const {saveSettings, settings} = useSettings()
  return (
    <Box sx={{p: 2}}>
      <Box sx={{display: 'flex', gap: 1, flexDirection: 'column'}}>

    <TextField  value={settings.name} placeholder="Name" onChange={(e)=> saveSettings({...settings, name: e.target.value})}/>
      <TextField value={settings.date} placeholder="Date" onChange={(e)=> saveSettings({...settings, date: e.target.value})} />
      <TextField value={settings.topQR} placeholder="Top Qr Position" type="nummer" onChange={(e)=> saveSettings({...settings, topQR: +e.target.value})} />
      <Button>Save</Button>
      </Box>
    </Box>
  );
}