import CHARACTER from "@/src/interfaces/character";
import Grid from "@mui/material/Grid";
import CharacterCard from "./card";

interface Props {
  data: CHARACTER[];
}

const CharactersList = ({ data }: Props) => {
  return (
    <Grid justifyContent="center" spacing={2} container>
      {data.map((character) => (
        <Grid item key={character.id}>
          <CharacterCard {...character} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CharactersList;
