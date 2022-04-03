import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Navbar from "../../components/chakra-ui/navbar";

export default {
  title: "chakra-ui/Navbar",
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
