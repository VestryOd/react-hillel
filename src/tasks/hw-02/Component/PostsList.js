import React, { Component } from "react";
import "./PostsList.component.css";
import Loading from "./Loading";
import PostPanel from "./PostPanel";

class PostsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      isFetching: false
    };
  }

  componentDidMount() {
    this.setState({ isFetching: true });

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => {
        const posts = json;
        this.setState({ posts, isFetching: false });
      });
  }

  handlePostClick = postUserId => {
    this.props.onUserChange(postUserId);
  };

  render() {
    const { isFetching } = this.state;
    const posts = [...this.state.posts];

    console.log(posts);
    if (isFetching)
      return (
        <div className="posts-list-wrapper">
          <Loading />
        </div>
      );
    return (
      <div className="posts-list-wrapper">
        <h3 className="list-header">The last comments</h3>
        {posts.map(el => (
          <PostPanel
            title={el.title}
            text={el.body}
            key={el.id}
            userId={el.userId}
            onClick={() => this.handlePostClick(el.userId)}
          />
        ))}
      </div>
    );
  }
}

export default PostsList;
