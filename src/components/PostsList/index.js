import React from "react";

import posts from './posts';

import Post from './Post';
import { Container } from './styles';

export default function PostsList() {
  return (
    <Container>
      {posts.map((post) => (
        <Post 
          key={post.id}
          title={post.title}
          description={post.description}
        />
      ))}
    </Container>
  )
}