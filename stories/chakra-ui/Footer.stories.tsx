import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Footer from "../../components/chakra-ui/footer";

export default {
  title: "chakra-ui/Footer",
  component: Footer,
  argTypes: {},
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

// TODO: extract props later
export const Default = Template.bind({});
