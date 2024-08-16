import { ListItem } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  key?: number;
}

const GenreItemContainer = ({ children, key }: Props) => {
  return (
    <ListItem padding="7px" key={key}>
      {children}
    </ListItem>
  );
};

export default GenreItemContainer;
