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
  makeStyles
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    // display: "flex",
    // flexWrap: "wrap",
    // justifyContent: "space-around",
    // overflow: "hidden",
    // backgroundColor: theme.palette.background.paper
  },
  gridList: {
    // flexWrap: "nowrap",
    // // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    // transform: "translateZ(0)"
  },
  title: {
    color: theme.palette.primary.light
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
  }
}));

const tileData = [
  {
    title: "Just Posted 1",
    description: "Get a load of this"
  },
  {
    title: "Just Posted 2",
    description: "You won't believe it "
  },
  {
    title: "Just Posted 3",
    description: "You're going to like what you see"
  },
  {
    title: "Just Posted 4",
    description: "Not kidding"
  },
  {
    title: "Just Posted 5",
    description: "Don't read it if you don't like it"
  }
];

export default function RecentUploads() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h5">Recent Articles</Typography>
      <GridList className={classes.gridList} cols={5}>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="/static/images/cards/contemplative-reptile.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {tile.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {tile.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Download
                </Button>
                <Button size="small" color="primary">
                  Details
                </Button>
              </CardActions>
            </Card>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
