import { Grid, GridItem, Show } from "@chakra-ui/react";

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav" bg="lightblue">
        Nav
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="gray">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="yellow">
        Main
      </GridItem>
    </Grid>
  );
};

export default App;
