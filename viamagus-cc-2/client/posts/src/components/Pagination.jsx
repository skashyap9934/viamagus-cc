/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React from "react";
import { Box, Button } from "@chakra-ui/react";

const Pagination = ({
  currentPage,
  totalPosts,
  limit = 10,
  setCurrentPage,
}) => {
  return (
    <Box
      display={"flex"}
      gap={3}
      m={"auto"}
      justifyContent={"center"}
      mt={3}
      className="pagination"
    >
      <Button
        isDisabled={currentPage === 1}
        fontFamily={"Poppins"}
        colorScheme="blue"
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        Prev
      </Button>

      <Button
        isDisabled={totalPosts <= currentPage * 10}
        fontFamily={"Poppins"}
        colorScheme="blue"
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        Next
      </Button>
    </Box>
  );
};

export default Pagination;
