import { timeFormatter } from "../utils/formatters";
import Avatar from "./avatar";

export default function ConversationTile() {
  return (
    <div className="mt-2 mr-1 flex flex-row rounded-md p-2 hover:bg-orange-300">
      <div className="relative">
        <Avatar size="large" />
        <div className="absolute right-2 bottom-[6px] h-3 w-3 rounded-full border-2 border-white bg-emerald-700" />
      </div>
      <div className="flex w-full flex-col">
        <div className="flex flex-row justify-between">
          <p className="text-lg font-bold">Name</p>
          <p className="text-xs font-semibold">{timeFormatter()}</p>
        </div>
        <div className="flex w-full flex-row justify-between">
          <p className="text-sm font-semibold">last message</p>
          <div className="rounded-full bg-amber-500 px-2 text-center text-gray-800">
            2
          </div>
        </div>
      </div>
    </div>
  );
}
