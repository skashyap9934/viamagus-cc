/* eslint-disable react/prop-types */

import React from "react";

import { Td } from "@chakra-ui/react";

import "../styles/posts.css";
import { Link } from "react-router-dom";

const Post = ({ id, userId, title, body }) => {
  return (
    <tr className="post">
      <Td>
        <Link to={`/${id}`}>{id}</Link>
      </Td>
      <Td>{userId}</Td>
      <Td className="title">{title}</Td>
      <Td className="body">{body}</Td>
    </tr>
  );
};

export default Post;
