import { MessageStatus } from "../enums/Message";
import { timeFormatter } from "../utils/formatters";
import Avatar from "./avatar";

interface Message {
  text: string;
  timeStamp: Date;
  status: MessageStatus;
}

interface MessageBubbleProps {
  showAvatar?: Boolean;
  message?: Message;
}

export default function MessageBubble({
  message,
  showAvatar,
}: MessageBubbleProps) {
  return (
    <>
      <div className="my-1 flex flex-row">
        <Avatar size="small" />
        <div className="w-min max-w-[60%]">
          <p className="relative break-words rounded-2xl bg-stone-100 px-3 py-1">
            Messages MessagesMessagesMessagesMessagesMessages Messages
          </p>
          <div className="flex flex-row">
            <p className=" -mt-3 flex w-1/2 justify-between rounded-b-[1.25rem] bg-slate-400 px-3 pt-3 pb-1 text-sm">
              {timeFormatter()}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6 text-gray-500"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6 text-green-500"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clipRule="evenodd"
                />
              </svg>
            </p>
          </div>
        </div>
      </div>

      <div className="my-1 flex flex-row-reverse">
        <Avatar size="small" />
        <div className="flex w-min max-w-[60%] flex-col">
          <p className="relative break-words rounded-2xl bg-green-300 px-3 py-1">
            Messages MessagesMessagesMessagesMessagesMessages Messages
          </p>
          <div className="flex flex-row-reverse">
            <p className=" -mt-3 flex w-1/2 flex-row-reverse justify-between rounded-b-[1.25rem] bg-teal-200 px-3 pt-3 pb-1 text-sm">
              {timeFormatter()}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6 text-gray-500"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6 text-green-500"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clipRule="evenodd"
                />
              </svg>
            </p>
          </div>
          {/* <p className="-mt-3 w-max self-end rounded-b-[1.25rem] bg-teal-200 px-3 pt-3 pb-1 text-sm ">
            {timeFormatter()}
          </p> */}
        </div>
      </div>
    </>
  );
}
