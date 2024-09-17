import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onOrderingValue: (value: string) => void;
  order: string;
}

const SortSelector = ({ onOrderingValue, order }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const currentOrderValue = sortOrders.find((orderr) => orderr.value === order);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentOrderValue?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((ordering) => (
          <MenuItem
            order={ordering.label}
            onClick={() => onOrderingValue(ordering.value)}
            key={ordering.value}
            value={ordering.value}
          >
            {ordering.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
