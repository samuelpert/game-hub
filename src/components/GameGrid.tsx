import { Text } from "@chakra-ui/react";
import useFetchGames from "../hooks/useFetchGames";

const GameGrid = () => {
  const { games, error } = useFetchGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
