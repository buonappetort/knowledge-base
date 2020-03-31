import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Toolbar, Typography, AppBar } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  header: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbarTitle: {
    flex: 1
  },
  centerToolbar: {
    justifyContent: "space-between",
    overflowX: "auto"
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0
  }
}));

export default function Header(props) {
  const classes = useStyles();
  const { appName } = props;

  return (
    <React.Fragment>
      <Toolbar className={classes.header}>
        <Typography
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
          component={RouterLink}
          to="/"
        >
          {appName}
        </Typography>
      </Toolbar>
    </React.Fragment>
  );
}
