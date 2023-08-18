import fetchCharactersData from "./fetcher";
import CharactersList from "@/src/components/characters/list";
import Stack from "@mui/material/Stack";
import FastPagination from "./pagination";

interface Props {
  page: number;
}

const HomeBody = async ({ page }: Props) => {
  const data = await fetchCharactersData({
    page,
  });
  return (
    <Stack marginX={10}>
      <section>
        <h1>Characters</h1>
        <CharactersList data={data.results} />
      </section>
      <Stack
        justifyContent="center"
        alignItems="center"
        marginTop={5}
        marginBottom={5}
      >
      <FastPagination page={page} pages={data.info.pages} />
      </Stack>
    </Stack>
  );
};

export default HomeBody;
