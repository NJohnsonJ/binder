import React, { useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { IconButton, Menu, MenuItem } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import { NavLink } from 'react-router-dom';
import routes from '../routes';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuButton: {
      marginRight: theme.spacing(2),
    },
  })
);
const NavMenu = () => {

  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    setAnchorEl(e.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <>
      <IconButton
        className={classes.menuButton}
        edge="start"
        aria-label="menu"
        color="inherit"
        onClick={handleClick}
        aria-controls='nav-menu'
        aria-haspopup='true'
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="nav-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {routes.map(route => (
          <MenuItem onClick={handleClose}>
            <NavLink to={route.path}>
              {route.title}
            </NavLink>
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}

export default NavMenu;
