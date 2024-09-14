import { ListItem } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GenreItemContainer = ({ children }: Props) => {
  return <ListItem padding="7px">{children}</ListItem>;
};

export default GenreItemContainer;
