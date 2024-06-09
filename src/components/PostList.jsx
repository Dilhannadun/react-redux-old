import React, { Component } from "react";
import { connect } from "react-redux";

class PostList extends Component {
  createListItems() {
    return this.props.allPosts.map((post) => {
      return (
        <li key={post.id}>
          {post.title} {post.body}
        </li>
      );
    });
  }
  render() {
    if (!this.props.allPosts) {
      return <h2>Click the Button First</h2>;
    }
    return <ul>{this.createListItems()}</ul>;
  }
}

function mapStateToProps(state) {
  return {
    allPosts: state.allPosts,
  };
}

export default connect(mapStateToProps)(PostList);
