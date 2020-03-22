import React, { Component } from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Comment from "./Comment";
import Icon from "@material-ui/core/Icon";
import CommentIcon from "@material-ui/icons/Comment";
import Loading from "./Loading";

const styles = {
  root: {
    width: "100%"
  },
  summury: {
    backgroundColor: "#8b8b8b",
    color: "#ffffff",
    borderBottom: "1px solid #dbdbdb"
  },
  control: {
    color: "#ffffff"
  },
  heading: {
    fontSize: "15px",
    fontWeight: 600,
    textTransform: "Capitalize"
  },
  details: {
    borderLeft: "1px solid #8b8b8b",
    borderRight: "1px solid #8b8b8b",
    display: "flex",
    flexDirection: "column"
  },
  text: {
    textIndent: "1.5em",
    textAlign: "justify",
    borderLeft: "5px solid #dbdbdb",
    paddingLeft: "10px",
    borderBottom: "5px solid #dbdbdb"
  }
};

class HigherOrderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComments: false,
      commnents: [],
      getComments: false
    };
  }

  onClickPost = () => {
    this.setState({ showComments: true });
    const getComments = this.state.getComments;

    if (!getComments) {
      const userId = this.props.userId;
      console.log(userId);
      fetch(`https://jsonplaceholder.typicode.com/posts/${userId}/comments`)
        .then(response => response.json())
        .then(json => {
          const commnents = json;
          this.setState({ commnents });
        });
      this.setState({ getComments: true });

      this.props.onClick(userId);
    }
  };

  render() {
    const { classes } = this.props;
    const { showComments } = this.state;
    const comments = [...this.state.commnents];
    return (
      <div onClick={() => this.onClickPost()} className={classes.root}>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon className={classes.control} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className={classes.summury}
          >
            <Typography className={classes.heading}>
              {this.props.title}
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.details}>
            <Typography className={classes.text}>{this.props.text}</Typography>
            <div className="comments-wrapper">
              {showComments && <Comment comments={comments} />}
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

HigherOrderComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HigherOrderComponent);
