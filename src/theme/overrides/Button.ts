import { Theme } from '@mui/material/styles'

// ----------------------------------------------------------------------

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function Button(theme: Theme) {
  // const isLight = theme.palette.mode === 'light'

  return {
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          borderRadius: '20px !important',
          fontFamily: 'inherit',
          fontWeight: theme.typography.fontWeightBold,
          // '& span': {
          //   fontFamily: FONT_SECONDARY,
          //   fontWeight: 'bold'
          // }
        },
      },
    },
  }
}
