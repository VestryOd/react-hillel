import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import "./Comment.component.css";

const useStyles = makeStyles(theme => ({
  heading: {
    textAlign: "left",
    display: "flex",
    flexDirection: "column",
    margin: "10px 0"
  },
  name: {
    fontWeight: 700,
    fontSize: "13px"
  },
  mail: {
    textAlign: "left",
    fontSize: "11px",
    margin: "10px 0",
    fontWeight: 300,
    color: "#b6b6b6"
  },
  text: {
    textAlign: "justify",
    fontSize: "13px"
  }
}));

export default function Comment(props) {
  const classes = useStyles();
  const comments = [...props.comments];

  return (
    <div>
      {comments.map(el => (
        <div className="comment-wrapper">
          <div className={classes.heading}>
            <Typography className={classes.name}>{el.name}</Typography>
            <a href={el.mail} className={classes.mail}>
              {el.email}
            </a>
          </div>
          <Typography className={classes.text}>{el.body}</Typography>
        </div>
      ))}
    </div>
  );
}
