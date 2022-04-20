import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import ProbGauge from "../../components/chakra-ui/probGauge";

export default {
  title: "chakra-ui/ProbGauge",
  component: ProbGauge,
  argTypes: {
    value: { control: "number" },
    max: { control: "number" },
  },
} as ComponentMeta<typeof ProbGauge>;

const Template: ComponentStory<typeof ProbGauge> = (args) => (
  <ProbGauge {...args} />
);

// TODO: extract props later
export const Default = Template.bind({});
Default.args = {
  value: 8,
  max: 12,
};
