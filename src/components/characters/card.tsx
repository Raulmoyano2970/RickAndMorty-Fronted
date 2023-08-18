import CHARACTER from "@/src/interfaces/character";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Image from "next/image";

const CharacterCard = ({ name, image }: Omit<CHARACTER, "id">) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Image
        src={image ?? "/no-image.png"}
        alt={name ?? "No name provided"}
        width={345}
        height={345}
      />
      <CardContent>
        <h2>{name ?? "No name provided"}</h2>
      </CardContent>
    </Card>
  );
};

export default CharacterCard;
