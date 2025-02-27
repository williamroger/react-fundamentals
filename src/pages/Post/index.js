import React from 'react';
import { useParams } from 'react-router-dom';

export default function Post() {
  const params = useParams();
  console.debug(params)
  return (
    <h1>Post Page</h1>
  );
}