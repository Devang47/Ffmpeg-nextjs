import React from "react";
import Container from "../layout/container";
import LiveEditFfpeg from "./LiveEditFfpeg";

function Homepage() {
  return (
    <Container>
      <header className="py-12 pt-32">
        <h1 className="text-center text-light-1 font-extrabold text-[40px] ">
          Convert your file with ease!
        </h1>
        <LiveEditFfpeg />
      </header>
    </Container>
  );
}

export default Homepage;
