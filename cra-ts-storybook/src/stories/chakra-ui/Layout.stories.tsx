import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Layout from "../../components/chakra-ui/layout";

export default {
  title: "chakra-ui/Layout",
  component: Layout,
  argTypes: {},
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args} />;

// TODO: extract props later
export const Default = Template.bind({});
