import React, { forwardRef } from "react";
import { useParams } from "react-router-dom";
import CenterToolbar from "./centertoolbar";
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
  Link,
} from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
import { Link as RouterLink } from "react-router-dom";
import "../home/centerfeatured/centerfeatured.scss";
import { red } from "@material-ui/core/colors";
import MaterialTable from "material-table";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

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
  mainFeaturedPost: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)",
  },
  mainFeaturedPostContent: {
    position: "relative",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
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

export default function CenterHomePage(props) {
  let { center } = useParams();
  let { centers } = props;

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

  const post = {
    title: "Title of a longer featured blog post",
    description:
      "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    image: "https://source.unsplash.com/random",
    imgText: "main image description",
    linkText: "Continue reading…",
  };

  return (
    <div>
      <CenterToolbar centers={centers} />
      <div className={classes.root}>
        <Paper
          className={classes.mainFeaturedPost}
          style={{ backgroundImage: `url(${post.image})` }}
        >
          {/* Increase the priority of the hero background image */}
          {
            <img
              style={{ display: "none" }}
              src={post.image}
              alt={post.imageText}
            />
          }
          <div className={classes.overlay} />
          <Grid container>
            <Grid item md={6}>
              <div className={classes.mainFeaturedPostContent}>
                <Typography
                  component="h1"
                  variant="h3"
                  color="inherit"
                  gutterBottom
                >
                  {post.title}
                </Typography>
                <Typography variant="h5" color="inherit" paragraph>
                  {post.description}
                </Typography>
                <Link variant="subtitle1" href="#">
                  {post.linkText}
                </Link>
              </div>
            </Grid>
          </Grid>
        </Paper>
        <Typography variant="h5">Featured from {center}</Typography>
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
        <MaterialTable
          icons={tableIcons}
          columns={[
            {
              title: "Product Title",
              field: "name",
            },
            { title: "Date Published", field: "datepublished" },
            { title: "Topic", field: "topic" },
            {
              title: "Author",
              field: "author",
              render: (rowData) => (
                <RouterLink to={`/authors/${rowData.author}`}>
                  {rowData.author}
                </RouterLink>
              ),
            },
          ]}
          data={[
            {
              name: "Product 1",
              datepublished: "04/01/2020",
              topic: "Product Topic 1",
              author: "Anthony Tortorello",
            },
            {
              name: "Product 2",
              datepublished: "03/01/2020",
              topic: "Product Topic 3",
              author: "Anthony Tortorello",
            },
            {
              name: "Product 3",
              datepublished: "02/01/2020",
              topic: "Product Topic 2",
              author: "Matt Daffron",
            },
            {
              name: "Product 4",
              datepublished: "01/01/2020",
              topic: "Product Topic 5",
              author: "Gary Checknita",
            },
            {
              name: "Product 5",
              datepublished: "01/01/2019",
              topic: "Product Topic 1",
              author: "Matt Daffron",
            },
          ]}
          title={`All Products from ${center}`}
        />
      </div>
    </div>
  );
}
