import React from "react";
import NavBar from "../../components/tailwind/navbar";

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
};
export default LayoutFixture;
