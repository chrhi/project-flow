import type { FC } from 'react';
import { Avatar, AvatarImage } from '../ui/avatar';
import { useRouter } from 'next/router';
import { cn } from '~/lib/utils';
import { useSession } from 'next-auth/react';
import { storeChatPartnerId, getChatPartnerId } from '~/lib/data-in-cookies';
import { setoreProjectMetaData } from '~/lib/MetaData';


interface chatContactAbdullahProps {
  id: string;
  image: string;
  imageType: string;
  title: string;
  description: string;
  isUnseenMessages: boolean;
}

type Props = {
  image: string;
  type: string;
  small?: boolean;
};

const FlowImageChat = ({ image, type, small }: Props) => {
  return (
    <div className="w-[50px] h-[50px] rounded-[50%]">
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

const ProjectGroupe: FC<chatContactAbdullahProps> = ({
  image,
  imageType,
  title,
  description,
  isUnseenMessages,
  id,
}) => {
  const session = useSession();
  const router = useRouter();

  const handleClick = () => {
    setoreProjectMetaData({
      project_id : id
    })
    router.push(`/app/chat/chat-project`);
  };

  return (
    <div
      onClick={handleClick}
      className={cn("w-full h-[60px] px-4 cursor-pointer my-2 hover:bg-gray-100 flex items-center justify-start gap-x-2", {
        "bg-sky-50": getChatPartnerId() === id,
      })}
    >
      {FlowImageChat({
        image,
        type: imageType,
      })}
      <div className="w-[80%] min-h-[45px] h-fit flex flex-col justify-center p-4 gap-y-1">
        <h3 className="truncate text-sm text-gray-600">{title}</h3>
        <h3
          className={`truncate text-sm ${
            isUnseenMessages ? "text-gray-900 font-semibold" : "text-gray-600"
          }`}
        >
          {description}
        </h3>
      </div>
    </div>
  );
};

export default ProjectGroupe;
