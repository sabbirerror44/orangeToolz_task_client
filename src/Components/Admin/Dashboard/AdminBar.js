import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MenuIcon from '@mui/icons-material/Menu';
import { ListItem } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import { styled, useTheme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../../App';
import FileUpload from "../../FileUpload/FileUpload";
import UserRegister from "../../User Register/UserRegister";
import UserList from "../../UserList/UserList";

const drawerWidth = 230;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function AdminBar() {
  const theme = useTheme();
  const linkList = [ 
  {name: 'User List' , link: '/panel/userList'},
  {name: 'User Registration', link: '/panel/registration'},
  {name: 'File Upload', link: '/panel/fileUpload'},
  ];
  const [open, setOpen] = React.useState(true);

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const [trigger, setTrigger] = React.useState(false);

  React.useEffect(() => {
      
  },[trigger])


  const handleTrigger = () => {

      setTimeout(() => {
          setTrigger(!trigger);
      }, 300);

  }
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleLogOut = ()=>{
    localStorage.clear();
    setLoggedInUser('');
    // setTimeout(function(){ window.location.reload();}, 400);
}

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar style={{marginBottom: '80px'}} position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" noWrap component="div" className="font-weight-bold mx-auto">
            Dashboard
          </Typography>
          <NavLink to="/">
                <button onClick={handleLogOut} className="btn btn-danger float-right mr-3">
                        Log out
                </button>
            </NavLink>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            minHeight: '2000px',
            boxSizing: 'border-box',
            background: '#006d85'
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          { linkList.map((item) => (
             <ListItem button>
                 {/* <ListItemText primary={item.name}> */}
                <NavLink style={{textDecoration: 'none', color: 'white'}} to={item.link} onClick={handleTrigger} >{item.name}</NavLink>
                {/* </ListItemText> */}
               
            </ListItem>
          ))}
        </List>
        
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {
            window.location.pathname === "/panel/userList" ?
            <UserList />:
            <></>
        }
       {
           window.location.pathname === "/panel/registration" ?
           <UserRegister/> :
           <></>
       }
       {
           window.location.pathname === "/panel/fileUpload" ?
           <FileUpload  /> :
           <></>
       }
   
      </Main>
    </Box>
  );
}