import { Heading, List } from "@chakra-ui/react";
import useFetchGenres, { Genre } from "../hooks/useFetchGenres";
import SkeletonGenreItem from "./SkeletonGenreItem";
import GenreItem from "./GenreItem";
import GenreItemContainer from "./GenreItemContainer";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useFetchGenres();

  // this will show nothing if there is an error to avoid so many confrotation error text.
  if (error) return null;
  const skeletons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  ];

  return (
    <>
      <Heading fontSize="3xl" marginBottom={5} paddingX={1}>
        Genres
      </Heading>
      <List>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GenreItemContainer key={skeleton}>
              <SkeletonGenreItem />
            </GenreItemContainer>
          ))}
        {data.map((genre) => (
          <GenreItemContainer key={genre.id}>
            <GenreItem
              selectedGenre={selectedGenre}
              handleSelectedGenre={(genre) => onSelectGenre(genre)}
              genre={genre}
            />
          </GenreItemContainer>
        ))}
      </List>
    </>
  );
};

export default GenreList;
