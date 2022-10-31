import React from "react";
import { m } from "framer-motion";
import Logo from "~/icons/Logo";
import Header from "../common/Header";
import Container from "../layout/container";
import LiveEditFfpeg from "./LiveEditFfpeg";

function Homepage() {
  return (
    <>
      <Header />
      <m.div className="logo-card">
        <Logo className="h-40 sm:h-36 md:h-40 xl:h-48" />
      </m.div>

      <Container className="pb-20 lg:pb-40">
        <LiveEditFfpeg />
      </Container>
    </>
  );
}

export default Homepage;
