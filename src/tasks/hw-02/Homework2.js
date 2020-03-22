import React, { Component } from "react";
import PostsList from "./Component/PostsList";
import UserCard from "./Component/UserCard";
import "./Homework2.css";

class Homework2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: ""
    };
  }

  changeUser = id => {
    this.setState({ currentUser: id });
  };

  render() {
    return (
      <div className="wrapper">
        <h1 className="header__title">React-Hillel | Homework #02</h1>
        <div className="content__wrapper">
          <PostsList onUserChange={userId => this.changeUser(userId)} />
          <UserCard userId={this.state.currentUser} />
        </div>
      </div>
    );
  }
}

export default Homework2;
