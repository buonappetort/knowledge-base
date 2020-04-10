import React from "react";
import {
  Paper,
  makeStyles,
  List,
  ListItem,
  ListItemText,
  Typography,
  ButtonBase as Button,
  Switch,
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { purple } from "@material-ui/core/colors/purple";

const useStyles = makeStyles((theme) => ({
  switchBase: {
    color: purple,
    "&$checked": {
      color: purple,
    },
    "&$checked + $track": {
      backgroundColor: purple,
    },
  },
}));

export default function Popular() {
  const [state, setState] = React.useState({
    trendingtags: true,
    popularreads: false,
  });

  const switchToPopular = () => {
    setState({ ...state, trendingtags: false, popularreads: true });
  };

  const switchToTrending = () => {
    setState({ ...state, trendingtags: true, popularreads: false });
  };

  const classes = useStyles();

  return (
    <div>
      {state.trendingtags ? (
        <div>
          <Typography variant="h6">Trending Tags</Typography>
          <Switch
            color="primary"
            checked={state.trendingtags}
            onChange={switchToPopular}
            name="trendingtags"
          />
          <List>
            <ListItem>
              <Button
                color="primary"
                noWrap
                component={RouterLink}
                to={`/products/`}
              >
                <ListItemText primary="#trendingtopic" />
              </Button>
            </ListItem>
            <ListItem>
              <Button
                color="primary"
                noWrap
                component={RouterLink}
                to={`/products/`}
              >
                <ListItemText primary="#trendingtopic" />
              </Button>
            </ListItem>
            <ListItem>
              <Button
                color="primary"
                noWrap
                component={RouterLink}
                to={`/products/`}
              >
                <ListItemText primary="#trendingtopic" />
              </Button>
            </ListItem>
            <ListItem>
              <Button
                color="primary"
                noWrap
                component={RouterLink}
                to={`/products/`}
              >
                <ListItemText primary="#trendingtopic" />
              </Button>
            </ListItem>
            <ListItem>
              <Button
                color="primary"
                noWrap
                component={RouterLink}
                to={`/products/`}
              >
                <ListItemText primary="#trendingtopic" />
              </Button>
            </ListItem>
          </List>
        </div>
      ) : (
        <div>
          <Typography variant="h6">Popular Reads</Typography>
          <Switch
            color="primary"
            checked={!state.popularreads}
            onChange={switchToTrending}
            name="popularreads"
          />
          <List>
            <ListItem>
              <Button
                color="primary"
                noWrap
                component={RouterLink}
                to={`/products/`}
              >
                <ListItemText primary="First Popular Article" />
              </Button>
            </ListItem>
            <ListItem>
              <Button
                color="primary"
                noWrap
                component={RouterLink}
                to={`/products/`}
              >
                <ListItemText primary="Second Popular Article" />
              </Button>
            </ListItem>
            <ListItem>
              <Button
                color="primary"
                noWrap
                component={RouterLink}
                to={`/products/`}
              >
                <ListItemText primary="Third Popular Article" />
              </Button>
            </ListItem>
          </List>
        </div>
      )}
    </div>
  );
  // return (
  //   <div>
  //     <Typography variant="h5">Trending</Typography>

  //   </div>
  // );
}
