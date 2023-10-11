import React from "react";
import {
  CTA,
  Features,
  Footer,
  Hero,
  Navbar,
  NavbarV2,
  Testimonial,
} from "./components";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <NavbarV2 />
      <Hero />
      <Features />
      <Testimonial />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
