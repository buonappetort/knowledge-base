import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Toolbar, Typography } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbarTitle: {
    flex: 1
  },
  toolbarSecondary: {
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
  const { sections, appName } = props;

  return (
    <React.Fragment>
      <Toolbar>
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
      <Toolbar className={classes.toolbarSecondary}>
        {sections.map(section => (
          <Button
            color="primary"
            noWrap
            key={section.title}
            variant="body2"
            className={classes.toolbarLink}
            component={RouterLink}
            to={`/${section.title}`}
          >
            {section.title}
          </Button>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}
