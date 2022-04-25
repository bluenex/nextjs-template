import React from "react";

export interface NavItem {
  label: string;
  href?: string;
}

export interface NavbarProps {
  nav: Array<NavItem>;
  brand: {
    type: "text" | "image";
    text: string;
    image?: string;
  };
  color?: string;
  loginProp?: {
    loginButtonLabel?: string;
    logoutButtonLabel?: string;
    isLoggedIn?: boolean;
    isLoadingUserStatus?: boolean;
    onClickLogin?: () => void;
    onClickLogout?: () => void;
    loginMenu?: Array<NavItem>;
  };
}

const NavBar = ({
  nav,
  brand = { type: "text", text: "SiteTitle" },
  color = "blue",
  loginProp = {
    loginButtonLabel: "Login",
    logoutButtonLabel: "Logout",
    isLoggedIn: false,
    isLoadingUserStatus: false,
    onClickLogin: () => {},
    onClickLogout: () => {},
  },
}: NavbarProps) => {
  return (
    <nav className="border-solid border-b border-gray-200">
      <div className="flex items-center min-h-[60px] px-4 py-2">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold">Hello world</h1>
            <ul className="inline-flex">
              <li className="mr-4 last:mr-0">
                <a className="text-base" href="/">
                  Contact
                </a>
              </li>
              <li className="mr-4 last:mr-0">
                <a className="text-base" href="/">
                  About us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
