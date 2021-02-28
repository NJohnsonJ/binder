import React, { useState } from 'react';
import { IconButton, Menu, MenuItem } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { routes } from '../routes/routes';

const NavMenu = () => {

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
        edge="start"
        aria-label="menu"
        color="inherit"
        onClick={ handleClick }
        aria-controls='nav-menu'
        aria-haspopup='true'
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="nav-menu"
        anchorEl={ anchorEl }
        keepMounted
        open={ Boolean(anchorEl) }
        onClose={ handleClose }
      >
        { routes.map(route => (
          <MenuItem onClick={ handleClose }><Link to={ route.path }>{ route.title }</Link></MenuItem>
        )) }
      </Menu>
    </>
  )
}

export default NavMenu;
