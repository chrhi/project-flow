import { block } from "million/react";
import { Avatar, AvatarImage } from "../ui/avatar";

type Props = {
  image: string;
  type: string;
  small?: boolean;
};

export const FlowImage = ({ image, type, small }: Props) => {
  return (
    <div className="w-[50px] h-[50px] rounded-[50%] ">
      {type === "COLOR" ? (
        <div className="bg-purple-500 rounded-[50%] w-full h-full"></div>
      ) : type === "IMAGE" ? (
        <Avatar className="w-[35px] h-[35px]">
          <AvatarImage src={image} />
        </Avatar>
      ) : (
        <span className={` ${small ? "text-[30px]" : "text-[40px]"} `}>
          {image}
        </span>
      )}
    </div>
  );
};


