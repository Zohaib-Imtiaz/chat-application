import Head from "next/head";
import Avatar from "../../components/avatar";
import ConversationSection from "../../components/conversation-section";
import ConversationTile from "../../components/conversation-tile";

export default function Messenger() {
  return (
    <div className="flex flex-row bg-emerald-400">
      <Head>
        <title>Messenger</title>
        <meta name="messenger" content="your chat messenger" />
      </Head>

      <div className="my-2 flex w-1/2 flex-col border-r-2 px-2">
        <div className="h-[120px]">
          <Avatar size="large" />
          <div className="mt-2 mb-2 flex w-full place-content-between rounded-[0.75rem] border-2 border-slate-500 px-2">
            <input
              type="text"
              className="my-2 mr-2 w-full break-words bg-transparent outline-none placeholder:text-slate-500"
              placeholder="Search"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="mt-2 h-6 w-6"
            >
              <path
                fillRule="evenodd"
                d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <hr className="h-1 border-0 bg-slate-200" />
        </div>

        <div className="scrollbar flex h-[calc(100vh-120px)] flex-col overflow-y-auto">
          <ConversationTile />
          {(function () {
            const tiles = [];
            for (let i = 0; i < 100; i++) {
              tiles.push(
                <div>
                  <ConversationTile />
                  <hr className="my-1 h-[2px] border-0 bg-slate-300" />
                </div>
              );
            }
            return tiles;
          })()}
        </div>
      </div>

      <ConversationSection />
    </div>
  );
}
