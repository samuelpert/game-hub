import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/image.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack>
      <Image src={logo} boxSize="70px" width="auto" />
      <SearchInput onSearch={(searchText) => onSearch(searchText)} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
