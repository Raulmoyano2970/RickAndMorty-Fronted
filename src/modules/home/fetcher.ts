import CHARACTER from "@/src/interfaces/character";

interface Props {
  page: number;
}

interface Response {
  info: {
    count: number;
    pages: number;
  };
  results: CHARACTER[];
}

const fetchCharactersData = async ({ page }: Props): Promise<Response> => {
  if (process.env.API_ENDPOINT === undefined) {
    throw new Error("API_ENDPOINT is undefined");
  }
  const endpoint = `${process.env.API_ENDPOINT}/humans/${page}`;
  const response = await fetch(endpoint).catch((err) => {
    console.log({ err });

    throw new Error("Failed to fetch");
  });

  const data = await response.json();
  return data.data.characters;
};

export default fetchCharactersData;
