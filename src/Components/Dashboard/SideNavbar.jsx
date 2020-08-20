import React , {useState} from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { connect } from "react-redux";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const SideNavbar = (props) => {
  // const { window } = props;
  const { user } = props;
  const [categories,setCategories] = useState([]);

 setCategories(user.categories)
  console.log("USER-SIDENAVBAR", user);
  const classes = useStyles();

  // const [mobileOpen, setMobileOpen] = React.useState(false);

  const drawer  = (
    <div>
      <div className={classes.toolbar} />

      <List>
        {categories.map((category, index) => (
          <ListItem button key={index}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={category.categoryName} />
          </ListItem>
        ))}
      </List>
    </div>
  );
  console.log(Array(user.categories),"LENGTH OF CATEGORIES")
  if (user.categories !== undefined) {
    // const container = window !== undefined ? () => window().document.body : undefined;
  
    return (
      <div className={classes.root}>
        <nav className={classes.drawer}>
          <Hidden implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
      </div>
    );
  } else {
    return (
      <div className={classes.root}>
        <nav className={classes.drawer}>
          <Hidden implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {/* <List>
                <ListItem>
                  <ListItemText primary="No category" />
                </ListItem>
              </List> */}
              <div style={{marginTop:'100px'}}>Hello</div>
            </Drawer>
          </Hidden>
        </nav>
      </div>
    );
  }
};

SideNavbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default SideNavbar;
