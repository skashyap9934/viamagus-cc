import React from "react";

import "../styles/post.css";

import { Box, Heading, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

import { fetchSinglePost } from "../redux/actions/posts";
import { useDispatch, useSelector } from "react-redux";

const SinglePost = () => {
  const { postId } = useParams();

  const dispatch = useDispatch();
  const post = useSelector((store) => store.post);

  React.useEffect(() => {
    document.title = `Post ${postId} | Details`;
    dispatch(fetchSinglePost(postId));
  }, []);

  if (post.loading || !post.post)
    return (
      <Text fontWeight={"bold"} textAlign={"center"} fontSize={"25px"}>
        Fetching Details...
      </Text>
    );

  return (
    <Box className="single-post">
      <Heading
        mt={3}
        textAlign={"center"}
        fontSize={"35px"}
        fontFamily={"Poppins"}
        as="h2"
      >
        Post <span>{postId}</span>
        details
      </Heading>

      <Box className="post-data">
        <Text>
          <span>Id:</span>
          {postId}
        </Text>
        <Text>
          <span>User Id:</span>
          {post.post.userId}
        </Text>
        <Text>
          <span>Title:</span>
          {post.post.title}
        </Text>
        <Text>
          <span>Body:</span>
          {post.post.body}
        </Text>
      </Box>
    </Box>
  );
};

export default SinglePost;
