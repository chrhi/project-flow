import { pusherServer } from "~/lib/pusher";



export default async function handler(req: { body: { message: any; sender: any; }; }, res: { json: (arg0: { message: string; }) => void; }) {
 
  const response = await pusherServer.trigger("chat", "incoming-message", {
    message : "the api dir is working",
    
  });

  res.json({ message: "completed" });

}