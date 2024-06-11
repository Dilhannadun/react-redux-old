import React, { Component } from "react";
import ButtonComponent from "./components/ButtonComponent";
import PostList from "./components/PostList";
import SelectedPost from "./components/SelectedPost";

export default class App extends Component {
  render() {
    return (
      <div>
        <ButtonComponent />
        <br />
        <PostList />
        <br />
        <SelectedPost />
      </div>
    );
  }
}
