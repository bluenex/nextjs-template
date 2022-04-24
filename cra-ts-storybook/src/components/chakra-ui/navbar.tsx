import {
  Avatar,
  Box,
  Button,
  Collapse,
  Flex,
  Icon,
  IconButton,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { FaAngleDown, FaAngleRight, FaBars, FaTimes } from "react-icons/fa";

// -- TYPES
export interface SubnavItem {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href?: string;
  subnav?: Array<SubnavItem>;
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
    loginMenu?: Array<SubnavItem>;
  };
}

// -- COMPONENTS
const DesktopNav = ({ nav, color }: { nav: Array<NavItem>; color: string }) => {
  return (
    <Stack direction="row" spacing={4} alignItems="center">
      {nav.map((navItem) => (
        <Box key={navItem.label}>
          {!navItem.subnav ? (
            <Link
              href={navItem.href ?? "#"}
              fontSize="sm"
              fontWeight={500}
              color="gray.600"
              p={2}
              _hover={{
                textDecoration: "none",
                color: "gray.800",
              }}
            >
              {navItem.label}
            </Link>
          ) : (
            <Popover trigger="hover" placement="bottom-start">
              <PopoverTrigger>
                <Link
                  fontSize="sm"
                  fontWeight={500}
                  color="gray.600"
                  p={2}
                  _hover={{
                    textDecoration: "none",
                    color: "gray.800",
                  }}
                >
                  {navItem.label}
                </Link>
              </PopoverTrigger>

              <PopoverContent
                w="fit-content"
                maxW={60}
                bg="white"
                border="none"
                rounded="xl"
                boxShadow="lg"
                p={2}
              >
                <Stack>
                  {navItem.subnav.map((subnavItem) => (
                    <DesktopSubNav
                      label={subnavItem.label}
                      href={subnavItem.href}
                      color={color}
                    />
                  ))}
                </Stack>
              </PopoverContent>
            </Popover>
          )}
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({
  label,
  href,
  color,
}: SubnavItem & { color: string }) => {
  return (
    <Link
      href={href ?? "#"}
      role="group"
      display="block"
      rounded="md"
      px={3}
      _hover={{ bg: `${color}.50` }}
    >
      <Stack direction="row" align="center">
        <Box mr={2}>
          <Text
            transition="all .3s ease"
            fontWeight={500}
            _groupHover={{ color: `${color}.400` }}
          >
            {label}
          </Text>
        </Box>
        <Flex
          flex={1}
          justify="flex-end"
          align="center"
          transition="all .3s ease"
          transform="translateX(-10px)"
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
        >
          <Icon color={`${color}.400`} w={5} h={5} as={FaAngleRight} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = ({ nav }: { nav: Array<NavItem> }) => {
  return (
    <Stack bg="white" p={4} display={{ md: "none" }}>
      {nav.map((navItem) => (
        <MobileNavItem
          label={navItem.label}
          href={navItem.href}
          subnav={navItem.subnav}
        />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, href, subnav }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={subnav && onToggle}>
      <Flex
        as={Link}
        href={href ?? undefined}
        justify="space-between"
        align="center"
        py={2}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text fontWeight={600} color="gray.600">
          {label}
        </Text>
        {subnav && (
          <Icon
            as={FaAngleDown}
            w={6}
            h={6}
            transition="all .25s ease-in-out"
            transform={isOpen ? "rotate(180deg)" : ""}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <Stack
          align="start"
          borderLeft={1}
          borderStyle="solid"
          borderColor="gray.200"
          mt={2}
          pl={4}
        >
          {subnav &&
            subnav.map((subnavItem) => (
              <Link key={subnavItem.label} py={2} href={subnavItem.href ?? "#"}>
                {subnavItem.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

// -- MAIN
/**
 * @description copied and revised from https://chakra-templates.dev/navigation/navbar
 *
 * TODO: check if href is internal or external
 * - if internal, wrap in NextLink
 * - else use external prop of Chakra's Link
 */
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
  const router = useRouter();

  const { isOpen, onToggle } = useDisclosure();

  const signinButtonVariant = useBreakpointValue({
    base: "link",
    md: "outline",
  });
  const brandAlign = useBreakpointValue({
    base: "center" as "center",
    md: "left" as "left",
  })!;

  const {
    loginButtonLabel = "Login",
    logoutButtonLabel = "Logout",
    isLoggedIn = false,
    isLoadingUserStatus = false,
    onClickLogin = () => {},
    onClickLogout = () => {},
    loginMenu,
  } = loginProp;

  return (
    <Box borderBottom={1} borderStyle="solid" borderColor="gray.200">
      <Flex
        align="center"
        minH="60px"
        width={{ md: "container.md", lg: "container.lg" }}
        color="gray.600"
        px={4}
        py={2}
        margin="auto"
      >
        {/* hamburger button */}
        <Flex flex={1} display={{ base: "flex", md: "none" }} ml={-2}>
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <FaTimes /> : <FaBars />}
            variant="ghost"
            aria-label="Toggle Navigation"
          />
        </Flex>

        {/* brand and desktop navs */}
        <Flex flex={1} justify={{ base: "center", md: "start" }}>
          <NextLink href="/" passHref>
            <Link _hover={{ textDecorationStyle: "none" }}>
              {brand.type === "text" ? (
                <Text
                  as="b"
                  fontSize={{ base: "2xl", md: "3xl" }}
                  textAlign={brandAlign}
                  fontFamily="heading"
                  color={`${color}.400`}
                >
                  {brand.text}
                </Text>
              ) : (
                <Image
                  src={brand.image}
                  title={brand.text}
                  alt={brand.text}
                  height={8}
                />
              )}
            </Link>
          </NextLink>

          {/* desktop navs */}
          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav nav={nav} color={color} />
          </Flex>
        </Flex>

        {/* right button menu */}
        <Stack
          flex={{ base: 1, md: 0 }}
          justify="flex-end"
          direction="row"
          spacing={6}
        >
          {isLoadingUserStatus ? null : !isLoggedIn ? (
            <Button
              fontSize="sm"
              fontWeight={600}
              colorScheme={color}
              variant={signinButtonVariant}
              onClick={() => {
                onClickLogin();
              }}
            >
              {loginButtonLabel}
            </Button>
          ) : (
            <Menu>
              <>
                <MenuButton>
                  <Avatar size="xs" />
                </MenuButton>
                <MenuList
                  position="absolute"
                  right={-6}
                  width="150px"
                  minW="150px"
                >
                  {loginMenu
                    ? loginMenu.map((item) => (
                        <MenuItem
                          key={item.href}
                          justifyContent="center"
                          onClick={() => router.push(item.href)}
                        >
                          {item.label}
                        </MenuItem>
                      ))
                    : null}
                  <MenuItem justifyContent="center" onClick={onClickLogout}>
                    {logoutButtonLabel}
                  </MenuItem>
                </MenuList>
              </>
            </Menu>
          )}
        </Stack>
      </Flex>

      {/* mobile navs */}
      <Collapse in={isOpen} animateOpacity>
        <MobileNav nav={nav} />
      </Collapse>
    </Box>
  );
};

export default NavBar;
