import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Grid } from "semantic-ui-react";

import PostCard from "../components/PostCard";

const FETCH_POSTS_QUERY = gql`
  query GetAllPosts{
    getPosts {
      id
      body
      createdAt
      username
      likeCount
      likes {
        username
      }
      commentCount
      comments {
        id
        username
        createdAt
        body
      }
    }
  }
`;

function Home() {
    const {
      loading,
      data: posts,
    } = useQuery(FETCH_POSTS_QUERY);

  return (
    <Grid columns={3} divided>
      <Grid.Row className="page-title">
        <h1>Recent Posts</h1>
      </Grid.Row>
      <Grid.Row>
        {loading ? (
          <h1>loading posts..</h1>
        ) : (
          posts &&
          posts.getPosts.map((post) => (
            <Grid.Column key={post.id}>
              <PostCard post={post} />
            </Grid.Column>
          ))
        )}
      </Grid.Row>
    </Grid>
  );
}


export default Home;
