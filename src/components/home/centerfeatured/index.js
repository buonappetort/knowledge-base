import React from "react";
import {
  Grid,
  Divider,
  Typography,
  GridList,
  GridListTile,
  GridListTileBar,
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
  CardActions,
  Button,
  makeStyles,
  CardHeader,
  Paper,
  Avatar,
  IconButton,
} from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
import { Link as RouterLink } from "react-router-dom";
import "./centerfeatured.scss";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {},
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
}));

function FeaturedPanel(props) {
  const classes = useStyles();
  console.log(props);
  let items = [];
  for (let i = 0; i < props.slides.length; i++) {
    const item = props.slides[i];
    const renderItem = (
      <Grid item xs={3}>
        <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                R
              </Avatar>
            }
            // action={
            //   <IconButton aria-label="settings">
            //     <MoreVertIcon />
            //   </IconButton>
            // }
            title={`${item.name}`}
            subheader={`by ${item.author} in ${item.center}`}
          />
          <CardMedia
            className={classes.media}
            image={item.image}
            title="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              component={RouterLink}
              to={`ia/articles/${item.center}/${item.id}`}
              size="small"
              color="primary"
            >
              Read
            </Button>
            <Button size="small" color="primary">
              {`More From ${item.center}`}
            </Button>
          </CardActions>
        </Card>
      </Grid>
    );
    items.push(renderItem);
  }

  console.log(items);
  return (
    <Grid container justify="center" spacing={1}>
      {items}
    </Grid>
  );
}

export default function CenterFeatured() {
  const classes = useStyles();
  const items = [
    {
      panel: 1,
      slides: [
        {
          id: 1,
          name: "Article 1",
          center: "Center 1",
          date: "1/1/2020",
          author: "Anthony",
          image: "https://source.unsplash.com/random",
        },
        {
          id: 2,
          name: "Article 2",
          center: "Center 2",
          date: "2/1/2020",
          author: "Gary",
          image: "https://source.unsplash.com/random",
        },
        {
          id: 3,
          name: "Article 3",
          center: "Center 3",
          date: "1/16/2020",
          author: "Matt",
          image: "https://source.unsplash.com/random",
        },
        {
          id: 4,
          name: "Article 4",
          center: "Center 3",
          date: "1/1/2020",
          author: "Ann",
          image: "https://source.unsplash.com/random",
        },
      ],
    },
    {
      panel: 2,
      slides: [
        {
          id: 5,
          name: "Article 5",
          center: "Center 2",
          date: "11/1/2019",
          author: "Ann",
          image: "https://source.unsplash.com/random",
        },
        {
          id: 6,
          name: "Article 6",
          center: "Center 2",
          date: "12/1/2019",
          author: "Matt",
          image: "https://source.unsplash.com/random",
        },
        {
          id: 7,
          name: "Article 7",
          center: "Center 1",
          date: "1/1/2019",
          author: "Anthony",
          image: "https://source.unsplash.com/random",
        },
        {
          id: 8,
          name: "Article 8",
          center: "Center 1",
          date: "1/1/2019",
          author: "Rick",
          image: "https://source.unsplash.com/random",
        },
      ],
    },
  ];
  return (
    <div className={classes.root}>
      <Typography variant="h5">From Around IA</Typography>
      <Carousel
        className="Example"
        // autoPlay={this.state.autoPlay}
        // timer={this.state.timer}
        // animation={this.state.animation}
        // indicators={this.state.indicators}
      >
        {items.map((item, index) => {
          return <FeaturedPanel slides={item.slides} key={index} />;
        })}
      </Carousel>
    </div>
  );
}
