import React, { ReactNode } from "react";
import HeaderRect from "~/icons/HeaderRect";
import HeaderRect2 from "~/icons/HeaderRect2";
import { motion } from "framer-motion";

const Wrapper = ({ children }: { children: ReactNode }) => {
  return <span className="word-wrapper whitespace-nowrap">{children}</span>;
};

function Header() {
  const lines = ["Convert your files", "with native tools!"];

  const item = {
    hidden: {
      y: "100%",
      color: "rgb(255,255,255)",
      transition: {
        ease: "easeIn",
      },
    },
    visible: {
      y: 0,
      color: "rgb(189 189 189)",
      transition: {
        ease: "easeIn",
        duration: 0.75,
        type: "spring",
      },
    },
  };

  return (
    <header className="py-12 pb-6 relative">
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.04,
            },
          },
        }}
        className="text-center text-light-2 font-extrabold text-[40px] sm:text-[60px] md:text-[70px] lg:text-[76px] xl:text-[85px] mix-blend-color-dodge lg:w-8/12 pb-16 w-10/12 mx-auto"
      >
        {lines.map((line, id) => (
          <div
            key={id}
            className="flex flex-wrap gap-4 items-center justify-center"
          >
            {line.split(" ").map((word, id) => (
              <Wrapper key={id}>
                {word.split("").map((letter, id) => (
                  <span
                    key={id}
                    style={{
                      overflow: "hidden",
                      padding: "1px",
                      display: "inline-block",
                    }}
                  >
                    <motion.span
                      variants={item}
                      style={{ display: "inline-block" }}
                    >
                      {letter}
                    </motion.span>
                  </span>
                ))}
              </Wrapper>
            ))}
          </div>
        ))}
        {/* Convert your file <br className="hidden lg:block" /> with */}
        {/* <span className="text-white"> native tools!</span> */}
      </motion.h1>

      <HeaderRect className="absolute right-0 bottom-0 w-24 md:w-32 lg:w-48 h-fit mix-blend-color-dodge" />
      <HeaderRect2 className="absolute left-0 bottom-0 w-24 md:w-32 lg:w-48 h-fit mix-blend-color-dodge" />
    </header>
  );
}

export default Header;
