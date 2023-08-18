import HomeBody from "@/src/modules/home";

interface Props {
  params: {
    page: number;
    slug: string[];
  };
}

const HumansPage = async ({ params }: Props) => {
  return <HomeBody page={params.page} />;
};

export default HumansPage;
