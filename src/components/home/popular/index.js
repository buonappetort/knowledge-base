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
      <Typography variant="h5">Trending</Typography>
      <List>
        <ListItem>
          <Button
            color="primary"
            noWrap
            component={RouterLink}
            to={`/products/`}
          >
            <ListItemText primary="#eminem" />
          </Button>
        </ListItem>
        <ListItem>
          <Button
            color="primary"
            noWrap
            component={RouterLink}
            to={`/products/`}
          >
            <ListItemText primary="#postmalone" />
          </Button>
        </ListItem>
        <ListItem>
          <Button
            color="primary"
            noWrap
            component={RouterLink}
            to={`/products/`}
          >
            <ListItemText primary="#eltonjohn" />
          </Button>
        </ListItem>
        <ListItem>
          <Button
            color="primary"
            noWrap
            component={RouterLink}
            to={`/products/`}
          >
            <ListItemText primary="#leonrussel" />
          </Button>
        </ListItem>
        <ListItem>
          <Button
            color="primary"
            noWrap
            component={RouterLink}
            to={`/products/`}
          >
            <ListItemText primary="#blacksabbath" />
          </Button>
        </ListItem>
      </List>
    </div>
  );
}
