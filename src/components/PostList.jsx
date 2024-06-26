import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { selectPost } from "../redux/actions/postAction";

class PostList extends Component {
  createListItems() {
    return this.props.allPosts.map((post) => {
      return (
        <li
          key={post.id}
          onClick={() => this.props.selectPost(post)}
          style={{ cursor: "pointer" }}
        >
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

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ selectPost: selectPost }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(PostList);
