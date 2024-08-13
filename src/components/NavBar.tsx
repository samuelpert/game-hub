import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack
      justifyContent="space-between"
      paddingTop="20px"
      paddingBottom="20px"
      paddingLeft="80px"
      paddingRight="80px"
    >
      <Image src={logo} boxSize="60px" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
