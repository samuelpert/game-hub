import { List } from "@chakra-ui/react";
import useFetchGenres from "../hooks/useFetchGenres";
import SkeletonGenreItem from "./SkeletonGenreItem";
import GenreItem from "./GenreItem";
import GenreItemContainer from "./GenreItemContainer";

const GenreList = () => {
  const { data, isLoading, error } = useFetchGenres();

  // this will show nothing if there is an error to avoid so many confrotation error text.
  if (error) return null;
  const skeletons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  ];

  return (
    <>
      <List>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GenreItemContainer>
              <SkeletonGenreItem key={skeleton} />
            </GenreItemContainer>
          ))}
        {data.map((genre) => (
          <GenreItemContainer key={genre.id}>
            <GenreItem genre={genre} />
          </GenreItemContainer>
        ))}
      </List>
    </>
  );
};

export default GenreList;
