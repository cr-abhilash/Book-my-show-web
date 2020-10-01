import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";

import "./Card.css";
const useStyles = makeStyles({
  root: {
    width: "30%",
    maxHeight: 400,
    border: "solid 1px black",
    color: "#333333",
    marginBottom: "5%",
  },
  media: {
    height: 200,
    width: "100%",
    objectFit: "cover",
    border: "solid 2px yellow",
  },
  CardContent: {
    color: "#333333",
  },
});

export default function MediaCard(props) {
  const classes = useStyles();
  const { movie } = props;
  return (
    <Card
      className={classes.root}
      onClick={(e) => props.NavigateToCatagory(e, movie)}
    >
      <CardActionArea>
        <img
          className="media"
          src={movie.movie_img_url}
          style={{
            height: 300,
            width: "100%",
          }}
        ></img>

        <CardContent className={classes.CardContent}>
          <p style={{ fontSize: 16, fontWeight: "bold", margin: "0" }}>
            {movie.Title}
          </p>
          <p style={{ fontSize: 14, margin: "0" }}>Run Time:{movie.Runtime}</p>
          <p style={{ fontSize: 14, margin: "0" }}>Director:{movie.Director}</p>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
