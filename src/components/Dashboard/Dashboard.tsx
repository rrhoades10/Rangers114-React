import React, { useState } from 'react'
import {
  Drawer as MUIDrawer,
  List,
  ListItemText,
  ListItemButton,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Divider,
  Button,
  CssBaseline,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
import { ChevronRight, ChevronLeft } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { theme } from '../../Theme/themes'
import { DataTable } from '../DataTable';
import { DroneForm } from '../DroneForm';

const drawerWidth = 240;

const myStyles = {
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },

  menuButton: {
    marginRight: theme.spacing(2)
  },

  hide: {
    display: 'none',
  },

  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },

  drawerHeader: {
    display: 'flex',
    width: drawerWidth,
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    //for contenet to be below the appbar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end'
  },

  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: 0
  },

  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0
  },

  toolbar: {
    display: 'flex'
  },

  toolbar_button: {
    marginLeft: 'auto',
    backgroundColor: theme.palette.primary.contrastText
  }
}


export const Dashboard = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  };

  const handleDrawerClose = () => {
    setOpen(false)
  };

  // Handle Dialog Open/Close
  const handleDialogOpen = () => {
    setDialogOpen(true)
  }

  const handleDialogClose = () => {
    setDialogOpen(false)
  }

  const itemsList = [
    {
      text: 'Home',
      onClick: () => navigate('/')

    },

    {
      text: 'Sign In',
      onClick: () => navigate('/signin')
    }
  ]

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        sx={open ? myStyles.appBarShift : myStyles.appBar}
        position='fixed'>
        <Toolbar sx={myStyles.toolbar}>
          <IconButton
            color='inherit'
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={open ? myStyles.hide : myStyles.menuButton}>
            <PetsOutlinedIcon />
          </IconButton>
          <Typography variant="h6" noWrap>Dashboard</Typography>
          <Button sx={myStyles.toolbar_button} onClick={handleDialogOpen}>Create New Drone</Button>
          {/* Dialog Pop Up Begins Here (*￣3￣)╭ */}
          <Dialog open={dialogOpen} onClose={handleDialogClose} aria-labelledby='form-dialog-title'>
            <DialogTitle id="form-dialog-title">Add New Drone</DialogTitle>
            <DialogContent>
              <DialogContentText>Enter drone informatio below (づ￣ 3￣)づ</DialogContentText>
              <DroneForm />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleDialogClose} color="primary">Cancel</Button>
            </DialogActions>
          </Dialog>

        </Toolbar>
      </AppBar>
      <MUIDrawer
        sx={open ? myStyles.drawer : myStyles.hide}
        variant="persistent"
        anchor="left"
        open={open}
        style={myStyles.drawerPaper}>
        <Box
          sx={myStyles.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeft /> : <PetsOutlinedIcon />}
          </IconButton>
        </Box>
        <Divider />
        <List>
          {itemsList.map((item) => {
            const { text, onClick } = item;
            return (
              <ListItemButton key={text} onClick={onClick}>
                <ListItemText primary={text} />
              </ListItemButton>
            )
          })}
        </List>
      </MUIDrawer>
      <Box
        sx={myStyles.content} >
        <Box sx={myStyles.drawerHeader} />
        <DataTable />
      </Box>
    </Box>
  )
}
