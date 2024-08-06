import React from "react";

import { Routes, Route } from "react-router-dom";
import Posts from "../pages/Posts";
import SinglePost from "../pages/SinglePost";
import Upload from "../pages/Upload";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/:postId" element={<SinglePost />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
