import React from "react";
import {
  Paper,
  makeStyles,
  List,
  ListItem,
  ListItemText,
  Typography,
  ButtonBase as Button
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles(theme => ({}));

export default function Popular() {
  return (
    <div>
      <Typography variant="h5">Top Reads</Typography>
      <List>
        <ListItem>
          <Button
            color="primary"
            noWrap
            component={RouterLink}
            to={`/products/`}
          >
            <ListItemText primary="Article 1" secondary="in Technology" />
          </Button>
        </ListItem>
        <ListItem>
          <Button
            color="primary"
            noWrap
            component={RouterLink}
            to={`/products/`}
          >
            <ListItemText primary="Article 2" secondary="in Design" />
          </Button>
        </ListItem>
        <ListItem>
          <Button
            color="primary"
            noWrap
            component={RouterLink}
            to={`/products/`}
          >
            <ListItemText primary="Article 3" secondary="in Business" />
          </Button>
        </ListItem>
        <ListItem>
          <Button
            color="primary"
            noWrap
            component={RouterLink}
            to={`/products/`}
          >
            <ListItemText primary="Article 4" secondary="in Technology" />
          </Button>
        </ListItem>
        <ListItem>
          <Button
            color="primary"
            noWrap
            component={RouterLink}
            to={`/products/`}
          >
            <ListItemText primary="Article 5" secondary="in Science" />
          </Button>
        </ListItem>
      </List>
    </div>
  );
}
