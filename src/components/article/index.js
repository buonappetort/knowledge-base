import React from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";
import {
  List,
  ListItemText,
  ListItem,
  Divider,
  Typography,
  Grid,
} from "@material-ui/core";
import ReactMarkdown from "markdown-to-jsx";
import { withStyles } from "@material-ui/core/styles";
// import Markdown from "./markdown";
import Link from "@material-ui/core/Link";
import { Breadcrumbs } from "@material-ui/core";
//import post from "./examples/post1.md";

const useStyles = makeStyles((theme) => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
}));

const styles = (theme) => ({
  listItem: {
    marginTop: theme.spacing(1),
  },
});

const options = {
  overrides: {
    h1: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: "h5",
      },
    },
    h2: { component: Typography, props: { gutterBottom: true, variant: "h6" } },
    h3: {
      component: Typography,
      props: { gutterBottom: true, variant: "subtitle1" },
    },
    h4: {
      component: Typography,
      props: { gutterBottom: true, variant: "caption", paragraph: true },
    },
    p: { component: Typography, props: { paragraph: true } },
    a: { component: Link },
    li: {
      component: withStyles(styles)(({ classes, ...props }) => (
        <li className={classes.listItem}>
          <Typography component="span" {...props} />
        </li>
      )),
    },
  },
};

export default function Main(props) {
  const classes = useStyles();
  const title = "Example Product";

  const post = `# Sample Article

  #### April 1, 2020 by [Olivier](/)
  
  This blog post shows a few different types of content that are supported and styled with
  Material styles. Basic typography, images, and code are all supported.
  You can extend these by modifying .
  
  Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
  Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
  Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.
  
  Curabitur blandit tempus porttitor. **Nullam quis risus eget urna mollis** ornare vel eu leo.
  Nullam id dolor id nibh ultricies vehicula ut id elit.
  
  Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum.
  Aenean lacinia bibendum nulla sed consectetur.
  
  ## Heading
  
  Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
  Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
  Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
  
  ### Sub-heading
  
  Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
  
  ### Sub-heading
  
  Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
  Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod.
  Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo
  sit amet risus.
  
  - Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
  - Donec id elit non mi porta gravida at eget metus.
  - Nulla vitae elit libero, a pharetra augue.
  
  Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.
  
  1.  Vestibulum id ligula porta felis euismod semper.
  2.  Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
  3.  Maecenas sed diam eget risus varius blandit sit amet non magna.
  
  Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.
  `;

  let { component } = useParams();

  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Breadcrumbs color="inherit">
            <Link>Helix</Link>
            <Link>I&A</Link>
            <Link>Mission Center 1</Link>
            <Link>articles</Link>
          </Breadcrumbs>
          <Divider />
        </Grid>
      </Grid>
      <Grid container spacing={9}>
        <Grid item xs={8}>
          <ReactMarkdown
            className={classes.markdown}
            options={options}
            key={post.substring(0, 40)}
          >
            {post}
          </ReactMarkdown>
        </Grid>
        <Grid item md={4}>
          <Typography variant="h6">More From this Center</Typography>
          <List>
            <ListItem>
              <RouterLink to="/">Another Product From this Center</RouterLink>
            </ListItem>
            <ListItem>
              <RouterLink to="/">How about another From this center</RouterLink>
            </ListItem>
            <ListItem>
              <RouterLink to="/">This is also from the same center</RouterLink>
            </ListItem>
          </List>
          <Typography variant="h6">More From this Author</Typography>
          <List>
            <ListItem>
              <RouterLink to="/">Another Product From this Author</RouterLink>
            </ListItem>
            <ListItem>
              <RouterLink to="/">How about another From this Author</RouterLink>
            </ListItem>
            <ListItem>
              <RouterLink to="/">This is also from the same Author</RouterLink>
            </ListItem>
          </List>
          <Typography variant="h6">More From this Topic</Typography>
          <List>
            <ListItem>
              <RouterLink to="/">Another Product From this Topic</RouterLink>
            </ListItem>
            <ListItem>
              <RouterLink to="/">How about another From this Topic</RouterLink>
            </ListItem>
            <ListItem>
              <RouterLink to="/">This is also from the same Topic</RouterLink>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </div>
  );
}
