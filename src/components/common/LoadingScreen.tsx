import { motion } from "framer-motion";
import React from "react";
import LoadingIcon from "~/icons/LoadingIcon";

function LoadingScreen({ variant }: { variant: string }) {
  return (
    <motion.section
      variants={{
        in: {
          opacity: 1,
          pointerEvents: "all",
        },
        out: {
          opacity: 0,
          pointerEvents: "none",
        },
      }}
      animate={variant}
      transition={{
        duration: 0.5,
      }}
      className="fixed inset-0 w-full h-full bg-dark-1 flex items-center justify-center z-20"
    >
      <div className="container bg-dark-1 p-3.5 w-fit rounded">
        <LoadingIcon />
      </div>
    </motion.section>
  );
}

export default LoadingScreen;
