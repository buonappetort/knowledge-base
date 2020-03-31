import React from "react";
import { Grid } from "@material-ui/core";
import FeaturedSection from "./featured";
import Popular from "./popular";
import RecentUploads from "./recent";
import CenterToolbar from "../centerhomepage/centertoolbar";

export default function Home(props) {
  return (
    <div>
      <CenterToolbar />
      <Grid container spacing={2}>
        <Grid item xs={10}>
          <FeaturedSection />
        </Grid>
        <Grid item xs={2}>
          <Popular />
        </Grid>
        <Grid item xs={12}>
          <RecentUploads />
        </Grid>
      </Grid>
    </div>
  );
}
