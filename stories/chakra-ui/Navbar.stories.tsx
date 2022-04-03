import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Navbar from "../../components/chakra-ui/navbar";

export default {
  title: "chakra-ui/Navbar",
  component: Navbar,
  argTypes: {
    isLoggedIn: { control: "boolean" },
    isLoadingUserStatus: { control: "boolean" },
    onClickLogin: { action: "clicked" },
    onClickLogout: { action: "clicked" },
  },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const NotLoggedIn = Template.bind({});

export const LoggingIn = Template.bind({});
LoggingIn.args = {
  isLoggedIn: false,
  isLoadingUserStatus: true,
};

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  isLoggedIn: true,
};
