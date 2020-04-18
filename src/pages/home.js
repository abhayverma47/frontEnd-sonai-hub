import React, { Component } from "react";
import axios from "axios";
import Post from "../components/Post";
import Grid from "@material-ui/core/Grid";

class home extends Component {
  state = {
    posts: null,
  };
  componentDidMount() {
    axios
      .get("/posts")
      .then((res) => {
        console.log(res.data);
        this.setState({
          posts: res.data,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }
  render() {
    let recentPostMarkup = this.state.posts ? (
      this.state.posts.map((post) => <Post key={post.postId} post={post} />)
    ) : (
      <p>Loading...</p>
    );
    return (
      <Grid container spacing={4}>
        <Grid item xs={12} sm={8}>
          {recentPostMarkup}
        </Grid>
        <Grid item xs={12} sm={4}>
          profile
        </Grid>
      </Grid>
    );
  }
}

export default home;
