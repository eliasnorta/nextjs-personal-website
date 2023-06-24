"use client";

import React from "react";
import { motion as m } from "framer-motion";

const MotionWrapper = ({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) => {
  return (
    <m.div
      initial={{ opacity: 0, translateY: 30 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
      viewport={{ once: true }}
      id={id}
    >
      {children}
    </m.div>
  );
};

export default MotionWrapper;
