import React, { useContext } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
// import Drawer from '@material-ui/core/Drawer';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import List from '@material-ui/core/List';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Typography from '@material-ui/core/Typography';
import Divider from "@material-ui/core/Divider";
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';
import { Backdrop, Box, Drawer } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { DrawerContext, useDrawer } from "../Provider/DrawerProvider";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
  },
  drawerClose: {
    overflowX: "hidden",
    width: "75px",
  },
  drawerOpen: {
    overflowX: "hidden",
    width: "240px",
    zIndex: 999,
  },
  drawerPaperClose: {
    width: "73px",
    backgroundColor: "#5DAAE0",
  },
  drawerPaperOpen: {
    width: "240px",
    backgroundColor: "#5DAAE0",
    zIndex: 999,
  },
  backdrop: {
    zIndex: 1,
    color: "#fff",
  },
}));

const MiniDrawer = ({ drawer, setDrawer }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Drawer
        variant="permanent"
        className={drawer ? classes.drawerOpen : classes.drawerClose}
        classes={{
          paper: drawer ? classes.drawerPaperOpen : classes.drawerPaperClose,
        }}
        onClick={() => setDrawer(!drawer)}
      >
        <MenuIcon
          style={{
            color: "#fff",
            fontSize: 43,
            marginLeft: 15,
            cursor: "pointer",
          }}
        />
        <Divider style={{ backgroundColor: "#AED5F0" }} />
      </Drawer>
    </div>
  );
};

export default MiniDrawer;
