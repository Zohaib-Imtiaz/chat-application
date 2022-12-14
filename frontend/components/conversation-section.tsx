import ConversationHeader from "./conversation-header";
import MessageBubble from "./message-bubble";
import MessageInput from "./message-input";

const dateFormatter = (date?: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const dateForm = new Intl.DateTimeFormat("en-AU", options).format(
    date ?? new Date()
  );
  return dateForm;
};

export default function ConversationSection() {
  return (
    <div className="mx-2 flex h-screen w-full flex-col place-content-between bg-emerald-400">
      <ConversationHeader />

      <hr className="h-1 border-0 bg-slate-200" />

      <div className="flex h-[calc(100vh-100px)] flex-col justify-end px-2 pt-2">
        <div className=" scrollbar flex flex-col overflow-y-auto">
          <p className="self-center">{dateFormatter()}</p>
          <MessageBubble />
        </div>

        <hr className="h-1 border-0 bg-slate-200" />

        <MessageInput />
      </div>
    </div>
  );
}
