import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Button,
  InputBase,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ExpandMore,
  Collapse,
  ListItemIcon,
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  topBarButton: {
    textTransform: "none",
    fontWeight: "bold",
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  list: {
    width: 250,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  mainLeftNav: {
    fontWeight: "bold",
  },
}));

export default function TopNav(props) {
  const classes = useStyles();
  const { appName, components } = props;
  const [open, setOpen] = React.useState(false);

  const handleLeftNav = () => {
    open === true ? setOpen(false) : setOpen(true);
  };
  const leftNavItems = [
    { main: "About", sub: ["Strategic Plan", "Leadership", "Info Needed"] },
    { main: "Internal" },
    { main: "PoA" },
    {
      main: "Tools",
      sub: [
        "Data Tools",
        "Policies",
        "Media Service Request Form",
        "Community",
        "Centers",
      ],
    },
    { main: "Admin" },
  ];
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton onClick={handleLeftNav} color="inherit" edge="start">
            <MenuIcon />
            <Drawer anchor="left" open={open}>
              <div className={classes.list}>
                <List>
                  {leftNavItems.map((item, index) => (
                    <div>
                      <ListItem button key={item.main}>
                        <ListItemText
                          classes={{ root: classes.mainLeftNav }}
                          primary={item.main}
                        />
                      </ListItem>
                      {item.sub ? (
                        <Collapse in={true}>
                          <List component="div" disablePadding>
                            {item.sub.map((item, index) => (
                              <ListItem button className={classes.nested}>
                                <ListItemText primary={item} />
                              </ListItem>
                            ))}
                          </List>
                        </Collapse>
                      ) : (
                        ""
                      )}
                    </div>
                  ))}
                </List>
              </div>
            </Drawer>
          </IconButton>
          <div className={classes.title}>
            <Button
              color="secondary"
              component={RouterLink}
              className={classes.topBarButton}
              to="/"
            >
              {appName}
            </Button>
            {components.map((component) => (
              <Button
                color="secondary"
                noWrap
                key={component.title}
                className={classes.topBarButton}
                component={RouterLink}
                to={`/component/${component.title}`}
              >
                {component.title}
              </Button>
            ))}
          </div>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
