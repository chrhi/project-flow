import type { ChangeEvent, Dispatch, FC, SetStateAction } from 'react';
import { AbdullahButton, buttonVariants } from './AbdullahButton';
import { cn } from '~/lib/utils';
import { Label } from '../ui/label';
import { useRef } from 'react';
import { Avatar, AvatarImage } from '~/components/ui/avatar';
import { Data } from 'emoji-mart';
import Picker from '@emoji-mart/react';

import { Popover, PopoverContent, PopoverTrigger } from '~/components/ui/popover';
import toast from 'react-hot-toast';

interface Props {
  isRequired?: boolean;
  setProjectImage: Dispatch<SetStateAction<{
    image: string;
    type: string;
  }>>;
  setSelectedFile: Dispatch<SetStateAction<File | null | undefined>>;
  projectImage: {
    image: string;
    type: string;
  };
}

const ProjectAvartPicker: FC<Props> = ({ isRequired, setProjectImage, setSelectedFile, projectImage }) => {
  const inputrefrence = useRef<HTMLInputElement>(null);
  const inputRefrenceImage = useRef<HTMLInputElement>(null);

  const setColor = (color: string) => {
    console.log(color);
    setProjectImage({
      image: color,
      type: 'COLOR',
    });
  };

  const setEmojee = (emojee: string) => {
    setProjectImage({
      image: emojee,
      type: 'EMOJEE',
    });
  };

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // Get the selected file from the input element
    if (file && file.type.startsWith('image/')) {
      setSelectedFile(file); // Update the state with the selected image file
      const previewUrl = URL.createObjectURL(file); // Create a temporary URL for the selected image

      setProjectImage({
        image: previewUrl,
        type: 'IMAGE',
      });
    } else {
      // If the selected file is not an image, you can display an error message or perform other actions
      toast.error('Please select a valid image file.');
    }
  };

  return (
    <div className='col-span-6 flex flex-col w-full gap-y-2 justify-center'>
      <Label>
        Icon {""} {isRequired && <span className='text-red-500 '>*</span>}
      </Label>
      <div className='w-full h-[40px] rounded-lg bg-white flex items-center gap-x-4'>
        {projectImage.type === "COLOR" ? (
          <div
            style={{
              background: projectImage.image.length > 0 ? projectImage?.image : "#2af884",
            }}
            className={`rounded-[50%] w-[40px] h-[40px]`}
          ></div>
        ) : projectImage.type === "IMAGE" ? (
          <Avatar className="w-[40px] h-[40px]">
            <AvatarImage src={projectImage?.image} />
          </Avatar>
        ) : (
          <span className='text-[35px]'>{projectImage.image}</span>
        )}
        <Popover>
          <PopoverTrigger asChild>
            <AbdullahButton className={cn(buttonVariants({ variant: "secondary", size: "sm" }))}>
              Emoji
            </AbdullahButton>
          </PopoverTrigger>
          <PopoverContent className='bg-transparent border-none'>
            <Picker
              className="!border-none"
              theme={"light"}
              data={Data}
              onEmojiSelect={(emojee: any) => setEmojee(emojee?.native)}
            />
          </PopoverContent>
        </Popover>
        <AbdullahButton
          onClick={() => inputRefrenceImage?.current?.click()}
          className={cn(buttonVariants({ variant: "secondary", size: "sm" }))}
        >
          Upload an image
          <input
            ref={inputRefrenceImage}
            className={cn(
              buttonVariants({ variant: "secondary", size: "sm" }),
              "outline-none hidden w-[0.1rem] h-[0.1rem] -z-[999] bg-white border-none"
            )}
            type="file"
            onChange={handleFileChange}
          />
        </AbdullahButton>
        <AbdullahButton
          onClick={() => inputrefrence.current?.click()}
          className={cn(buttonVariants({ variant: "secondary", size: "sm" }))}
        >
          color
          <input
            onChange={(e) => setColor(e.target.value)}
            className={cn(
              buttonVariants({ variant: "secondary", size: "sm" }),
              "outline-none w-[0.1rem] h-[0.1rem] -z-[999] bg-white border-none"
            )}
            ref={inputrefrence}
            type='color'
          />
        </AbdullahButton>
      </div>
    </div>
  )
}

export default ProjectAvartPicker