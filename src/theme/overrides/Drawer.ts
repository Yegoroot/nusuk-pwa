import { alpha, Theme } from '@mui/material/styles'

// ----------------------------------------------------------------------

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function Drawer(theme: Theme) {
  const isLight = theme.palette.mode === 'light'

  return {
    MuiDrawer: {
      styleOverrides: {
        root: {
          '.MuiDrawer-paper': {
            borderRadius: 0,
          }
        },
        modal: {
          '&[role="presentation"]': {
            // '& .MuiPaper-root': {
            //   left: theme.direction === 'rtl' ? 'unset !important' : '0 !important',
            //   right: theme.direction === 'rtl' ? '0 !important' : 'unset !important',
            // },
            '& .MuiDrawer-paperAnchorLeft': {
              boxShadow: `8px 24px 24px 12px ${alpha(
                theme.palette.grey[900],
                isLight ? 0.16 : 0.48
              )}`,
            },
            '& .MuiDrawer-paperAnchorRight': {
              boxShadow: `-8px 24px 24px 12px ${alpha(
                theme.palette.grey[900],
                isLight ? 0.16 : 0.48
              )}`,
            },
          },
        },
      },
    },
  }
}
