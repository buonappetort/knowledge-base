import React from "react";
import { Toolbar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import vocabulary from "../../../config/vocabulary";

import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  centerToolbar: {
    justifyContent: "space-between",
    overflowX: "auto"
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0
  }
}));

export default function CenterToolbar(props) {
  const { centers } = vocabulary;
  const classes = useStyles();
  return (
    <Toolbar className={classes.centerToolbar}>
      {centers.map(center => (
        <Button
          color="primary"
          noWrap
          key={center.title}
          variant="body2"
          className={classes.toolbarLink}
          component={RouterLink}
          to={`/ia/${center.title}`}
        >
          {center.title}
        </Button>
      ))}
    </Toolbar>
  );
}
