import { Theme } from '@mui/material/styles'
// import { FONT_SECONDARY } from '../typography'

// ----------------------------------------------------------------------

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function IconButton(theme: Theme) {
  // const isLight = theme.palette.mode === 'light'

  return {
    MuiIconButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // fontFamily: FONT_SECONDARY,
          // fontWeight: theme.typography.fontWeightBold,
          '& span': {
            // fontFamily: FONT_SECONDARY,
            // fontWeight: theme.typography.fontWeightBold
          }
        },
      },
    },
  }
}
