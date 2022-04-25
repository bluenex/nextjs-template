import React from "react";
import NavBar from "../../components/chakra-ui/navbar";
import Footer from "../../components/chakra-ui/footer";

const LayoutFixture = {
  NavBar: (
    <NavBar
      brand={{
        type: "text",
        text: "CosmosFixture",
      }}
      nav={[
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
      ]}
    />
  ),
  Footer: <Footer />,
};
export default LayoutFixture;
