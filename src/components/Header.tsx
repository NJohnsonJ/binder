import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import NavMenu from './NavMenu';

const Header = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <NavMenu />
        <Typography variant="h6" >
          Binder
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header;
