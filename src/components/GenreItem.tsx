import { Box, Button, flexbox, HStack, Image, Text } from "@chakra-ui/react";
import { Genre } from "../hooks/useFetchGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  genre: Genre;
  handleSelectedGenre: (genre: Genre) => void;
}

const GenreItem = ({ genre, handleSelectedGenre }: Props) => {
  return (
    <HStack>
      <Image
        boxSize="32px"
        borderRadius={8}
        src={getCroppedImageUrl(genre.image_background)}
      />
      <Button
        onClick={() => handleSelectedGenre(genre)}
        variant="link"
        fontSize="m"
      >
        {genre.name}
      </Button>
    </HStack>
  );
};

export default GenreItem;
