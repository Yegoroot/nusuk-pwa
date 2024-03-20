import { Theme } from '@mui/material/styles'

// ----------------------------------------------------------------------

export default function Paper(theme: Theme) {
  return {
    MuiPaper: {
      styleOverrides: {
        // Name of the slot
        root: {
          borderRadius: theme.spacing(2)
        },
      },
    },
  }
}
