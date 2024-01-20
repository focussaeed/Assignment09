import React from 'react'
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";


export const Navbar_Component = () => {
  return (
    <AppBar position="static">
    <Toolbar>
      <Typography variant="h1" component="div" sx={{ flexGrow: 1 }}>
        <div className='text-center'>
        JAWAN PAKISTAN
        </div>
      </Typography>

    
    </Toolbar>
  </AppBar>
  )
}
