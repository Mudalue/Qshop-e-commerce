import React from "react";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../ui/organisms/home/Navbar";
import Footer from "../ui/organisms/home/Footer";

const Container = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Navbar />
        <Outlet />
        <Footer />
      </motion.div>
    </>
  );
};

export default Container;
