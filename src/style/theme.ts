import { createMuiTheme } from '@material-ui/core';

export const colors = {
  primary: '#366b2b',
  secondary: '#685012'
}

export default createMuiTheme({
  palette: {
    primary: {
      main: colors.primary
    },
    secondary: {
      main: colors.secondary
    }
  }
})