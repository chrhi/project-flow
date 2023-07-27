

import {
    createTRPCRouter,
  } from "~/server/api/trpc";
import { send_message } from "./send-message";
import { get_messages } from "./get-messages";
import { get_chat_partner } from "./get-chat-partner";
import { send_chat_message } from "./send-chat-message";

  
  
  export const chatRouter = createTRPCRouter({
    send_message,
    get_messages,
    get_chat_partner,
    send_chat_message
  });
  