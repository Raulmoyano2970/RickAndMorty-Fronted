import fetchCharactersData from "./fetcher";
import CharactersList from "@/src/components/characters/list";
import Stack from "@mui/material/Stack";

interface Props {
  page: number;
}

const HomeBody = async ({ page }: Props) => {
  const data = await fetchCharactersData({
    page,
  });
  return (
    <Stack marginX={10}>
      <h1>Rick and Morty Human Database</h1>
      <section>
        <h2>Characters</h2>
        <CharactersList data={data.results} />
      </section>
      <Stack
        justifyContent="center"
        alignItems="center"
        marginTop={5}
        marginBottom={5}
      >
       
      </Stack>
    </Stack>
  );
};

export default HomeBody;
