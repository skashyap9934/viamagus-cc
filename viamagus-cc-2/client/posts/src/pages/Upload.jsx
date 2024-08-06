/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import React from "react";
import "../styles/upload.css";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { uploadPost } from "../redux/actions/upload";

const Upload = () => {
  const [data, setData] = React.useState({ title: "", body: "" });
  const [uploadClicked, setUploadClicked] = React.useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { loading } = useSelector((store) => store.upload);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(uploadPost(data));
    setUploadClicked(true);
  };

  React.useEffect(() => {
    document.title = `Upload new post | Viamagus`;
    if (uploadClicked && !loading) navigate("/");
  }, [loading, uploadClicked]);

  return (
    <Box className="upload">
      <Text textAlign={"center"} mt={5} fontWeight={"bold"} fontSize={"21px"}>
        Upload a new post
      </Text>
      <Box>
        <FormControl isRequired>
          <FormLabel>Title of the post</FormLabel>
          <Input onChange={handleChange} name="title" placeholder="Title" />
        </FormControl>
        <FormControl>
          <FormLabel>Description of the post</FormLabel>
          <Textarea
            onChange={handleChange}
            name="body"
            maxH={"40vh"}
            placeholder="Description"
          />
          <Text color={"red"}>
            {data.body.length > 1000
              ? "Description cannot be more than 1000 characters"
              : null}
          </Text>
        </FormControl>
        <Button
          onClick={handleSubmit}
          colorScheme="green"
          width={"100%"}
          type="submit"
          isDisabled={!data.title || !(data.body.length < 1001)}
        >
          Submit
        </Button>
        <Text fontWeight={"bold"} color={"red"}>
          {loading ? "Uploading..." : null}
        </Text>
      </Box>
    </Box>
  );
};

export default Upload;
