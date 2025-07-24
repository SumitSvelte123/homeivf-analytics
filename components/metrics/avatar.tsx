import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface IProps {
  image: string | null;
  name: string;
}

function getFallbackName(name: string) {
  return name[0] || "N";
}

export const TableCellAvatar = ({ image, name }: IProps) => {
  return (
    <Avatar className="size-8">
      <AvatarImage src={image || ""} />
      <AvatarFallback>{getFallbackName(name)}</AvatarFallback>
    </Avatar>
  );
};
