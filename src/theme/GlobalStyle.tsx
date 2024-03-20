/* eslint-disable no-underscore-dangle */
/* eslint-disable camelcase */
import { Theme, GlobalStyles } from '@mui/material'




const GlobalStylesBase = () => {
  return (
    <GlobalStyles
      styles={(theme: Theme) => {
        const isDark = theme.palette.mode !== 'light'

        return ({


          '*': {
            // color: theme.palette
            fontFamily: '"Noto Naskh Arabic", serif'
          },
          html: {
            background: 'linear-gradient(72deg, rgba(40,40,40,1) 26%, rgba(27,29,33,1) 100%)',
          },
          body: {
            height: '100%',
            background: 'linear-gradient(72deg, rgba(40,40,40,1) 26%, rgba(27,29,33,1) 100%)',
          },
          hr: {
            marginTop: theme.spacing(3),
            marginBottom: theme.spacing(3),
            backgroundColor: theme.palette.text.secondary,
            border: 0,
            height: 1
          },

          a: {
            textDecoration: 'none'
          }
 


        })
      }}
    />
  )
}

export default GlobalStylesBase
