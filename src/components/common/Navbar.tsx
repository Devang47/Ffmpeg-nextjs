import React, { useEffect, useState } from "react";
import LoadingIcon from "~/icons/LoadingIcon";
import Logo from "~/icons/Logo";
import NavIcon from "~/icons/NavIcon";

import { motion } from "framer-motion";
import CrossIcon from "~/icons/CrossIcon";
import clsx from "clsx";
import { useAppStore } from "~/context/use-app-store";
import { useRouter } from "next/router";
import { signOutUser } from "~/lib/utils/auth";

function Navbar() {
  const [isOpen, seIsOpen] = useState(false);
  const user = useAppStore().user;

  const router = useRouter();

  const handleButtonClick = (btnType: string) => {
    console.log(btnType);
    switch (btnType) {
      case "Home":
        router.push(
          {
            pathname: "/",
          },
          undefined,
          { shallow: true }
        );
        break;
      case "Contact":
        window.open("mailto:devangsaklani@gmail.com", "_blank");
        break;
      case "Report bug":
        window.open(
          "https://github.com/Devang47/Ffmpeg-nextjs/issues",
          "_blank"
        );
        break;
      case "Sign out":
        signOutUser();
        break;
      case "Sign in":
        router.push(
          {
            pathname: "/login",
          },
          undefined,
          { shallow: true }
        );
        break;
    }
  };

  useEffect(() => {
    window.addEventListener("keypress", handleCloseMenuOnKeypress);

    return () => {
      window.removeEventListener("keypress", handleCloseMenuOnKeypress);
    };
  }, []);

  const handleCloseMenuOnKeypress = (e: KeyboardEvent) => {
    e.preventDefault();
    if (e.key == "Escape") {
      seIsOpen(false);
    }
  };

  return (
    <nav>
      <div className="fixed top-0 left-0 w-full py-4 px-6 bg-dark-2/70 z-10 focus:border focus:border-light-4 backdrop-blur border-b border-dark-focus">
        <div className="max-w-large mx-auto flex items-center justify-between">
          <button onClick={() => seIsOpen(true)} className="logo py-4 px-2">
            <NavIcon />
          </button>
          {useAppStore().isLoading && (
            <div className="">
              <LoadingIcon className="w-5 h-5" />
            </div>
          )}
        </div>
      </div>

      <motion.div
        variants={{
          open: {
            opacity: 1,
            pointerEvents: "auto",
          },
          closed: { opacity: 0, pointerEvents: "none" },
        }}
        initial={"closed"}
        animate={isOpen ? "open" : "closed"}
        transition={{
          duration: 0.3,
        }}
        className="fixed top-0 left-0 bg-dark-2/80 text-center w-full h-screen z-20 backdrop-blur"
      >
        <div className="max-w-large mx-auto">
          <div className="flex items-center justify-between px-6 lg:px-0 py-4 lg:py-6">
            <Logo className="ml-2" />

            <button
              onClick={() => seIsOpen(false)}
              className="rounded-lg py-3 px-2"
            >
              <CrossIcon />
            </button>
          </div>

          <div className="flex flex-col items-start justify-center mt-32 text-3xl px-6 lg:px-0 gap-8">
            {new Array(
              "Home",
              "Contact",
              "Report bug",
              user ? "Sign out" : "Sign in"
            ).map((e, i) => (
              <motion.button
                key={i}
                variants={{
                  closed: { opacity: 0, y: 0 },
                  open: { opacity: 1, y: [40, 0] },
                }}
                onClick={() => handleButtonClick(e)}
                animate={isOpen ? "open" : "closed"}
                transition={{
                  delay: isOpen ? i * 0.13 + 0.2 : 0,
                  duration: 0.3,
                }}
                className={clsx(
                  "text-left py-2 px-2 w-fit hover:underline underline-offset-4",
                  i === 3 && "font-bold"
                )}
              >
                {e}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>
    </nav>
  );
}

export default Navbar;
