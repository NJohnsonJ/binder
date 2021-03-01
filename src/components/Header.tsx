import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import NavMenu from './NavMenu';
import Login from './Login';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
  })
);

const Header = () => {

  const classes = useStyles();

  const [showLogin, setShowLogin] = useState<Boolean>(false);

  return (
    <div className={classes.root}>
      <AppBar position="sticky">
        <Toolbar>
          <NavMenu />
          <Typography variant="h6" >
            Binder
        </Typography>
          <Button onClick={() => setShowLogin(true)}>Login</Button>
          {showLogin ? (
            <Login onClose={() => setShowLogin(false)} />
          ) : null}
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header;
