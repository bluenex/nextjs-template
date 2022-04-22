import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Navbar from "../../components/chakra-ui/navbar";

export default {
  title: "chakra-ui/Navbar",
  component: Navbar,
  args: {
    nav: [
      {
        label: "Dropdown Nav",
        subnav: [
          {
            label: "The width is set to fit content but capped at {60}",
            href: "/ex1",
          },
          { label: "ex2", href: "/ex2" },
        ],
      },
      { label: "About Us" },
    ],
  },
  argTypes: {
    loginProp: {
      isLoggedIn: { control: "boolean" },
      isLoadingUserStatus: { control: "boolean" },
      onClickLogin: { action: "clicked" },
      onClickLogout: { action: "clicked" },
    },
  },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const NotLoggedIn = Template.bind({});

export const LoggingIn = Template.bind({});
LoggingIn.args = {
  loginProp: {
    isLoggedIn: false,
    isLoadingUserStatus: true,
  },
};

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  loginProp: {
    isLoggedIn: true,
  },
};
