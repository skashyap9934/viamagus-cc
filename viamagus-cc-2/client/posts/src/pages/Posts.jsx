// Packages
import React from "react";
import { useNavigate } from "react-router-dom";

// Stylesheets
import "../styles/posts.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/actions/posts";
import Post from "../components/Post";

// Components
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableContainer,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import Pagination from "../components/Pagination";

// Variables

const Posts = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const posts = useSelector((store) => store.posts);

  const [currentPage, setCurrentPage] = React.useState(1);

  React.useEffect(() => {
    dispatch(fetchPosts((currentPage - 1) * 10, 10));
  }, [currentPage]);

  if (posts.loading)
    return (
      <Heading fontFamily={"Poppins"} className="loading-text" as="h2">
        Retriving posts...
        <br />
        Please wait...
      </Heading>
    );

  return (
    <div className="posts">
      <Heading mt={5} as="h2">
        All the posts are listed below:
      </Heading>
      <Text mb={3} color={"red"} textAlign={"center"}>
        Click on the Sl No. to get details
      </Text>

      <Button
        onClick={() => navigate("/upload")}
        colorScheme="green"
        className="upload-btn"
      >
        Upload New Post
      </Button>

      <TableContainer className="table">
        <Table size="sm">
          <Thead>
            <Tr>
              <Th>Sl No.</Th>
              <Th>User Id</Th>
              <Th>Title</Th>
              <Th>Body</Th>
            </Tr>
          </Thead>
          <Tbody>
            {posts.posts.map((post) => (
              <Post {...post} key={post.id} />
            ))}
          </Tbody>
        </Table>
      </TableContainer>

      <Pagination
        currentPage={currentPage}
        totalPosts={posts.totalCount}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Posts;
