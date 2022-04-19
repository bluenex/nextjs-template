import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Dropzone from "../../components/chakra-ui/dropzone";

export default {
  title: "chakra-ui/Dropzone",
  component: Dropzone,
  argTypes: {},
} as ComponentMeta<typeof Dropzone>;

const Template: ComponentStory<typeof Dropzone> = (args) => (
  <Dropzone {...args} />
);

// TODO: extract props later
export const Default = Template.bind({});
