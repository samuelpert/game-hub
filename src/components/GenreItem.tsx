import { Box, Button, flexbox, HStack, Image, Text } from "@chakra-ui/react";
import { Genre } from "../hooks/useFetchGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  genre: Genre;
  handleSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreItem = ({ genre, handleSelectedGenre, selectedGenre }: Props) => {
  return (
    <HStack>
      <Image
        boxSize="32px"
        borderRadius={8}
        // cover the space scaled with aspect ratio preserved
        objectFit="cover"
        src={getCroppedImageUrl(genre.image_background)}
      />
      <Button
        fontWeight={genre.id == selectedGenre?.id ? "bold" : "normal"}
        onClick={() => handleSelectedGenre(genre)}
        variant="link"
        fontSize="lg"
        whiteSpace="normal"
        textAlign="left"
      >
        {genre.name}
      </Button>
    </HStack>
  );
};

export default GenreItem;
