import { HStack, List, ListItem, Image, Text } from "@chakra-ui/react";
import useFetchGenres from "../hooks/useFetchGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { data } = useFetchGenres();

  return (
    <>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="7px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
