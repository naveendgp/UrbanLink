// src/components/Sidebar.js

import React from "react";
import {
  Box,
  Flex,
  IconButton,
  CloseButton,
  useDisclosure,
  Drawer,
  DrawerContent,
  Text,
  VStack,
  Icon,
  Link,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiMenu,
} from "react-icons/fi";

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      bg="teal.500"
      borderRight="1px"
      borderRightColor="gray.200"
      w={"28vh"}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text
          fontSize="2xl"
          fontFamily="monospace"
          fontWeight="bold"
          color="white"
        >
          My App
        </Text>
        <CloseButton
          display={{ base: "flex", md: "none" }}
          onClick={onClose}
          color="white"
        />
      </Flex>
      <VStack align="start" spacing={4} mt={8}>
        <NavItem icon={FiHome} to="/">
          Home
        </NavItem>
        <NavItem icon={FiTrendingUp} to="/trending">
          Trending
        </NavItem>
        <NavItem icon={FiCompass} to="/explore">
          Explore
        </NavItem>
        <NavItem icon={FiStar} to="/favorites">
          Favorites
        </NavItem>
      </VStack>
    </Box>
  );
};

const NavItem = ({ icon, children, to, ...rest }) => {
  return (
    <Link
      href={to}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
      w="full"
      {...rest}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "teal.400",
          color: "white",
        }}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        <Text fontWeight="medium" color="white">
          {children}
        </Text>
      </Flex>
    </Link>
  );
};

const SideNav = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh" bg="gray.100">
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
        size="lg"
        m={2}
      />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
};

export default SideNav;
