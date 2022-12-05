import Head from "next/head";

const timeFormatter = (date?: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "numeric",
    // second: "numeric",
    // timeZone: 'Australia/Sydney',
    // timeZoneName: 'short'
  };
  const time = new Intl.DateTimeFormat("en-AU", options).format(
    date ?? new Date()
  );
  return time;
};

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

export default function Messenger() {
  return (
    <div className="flex h-screen flex-col place-content-between bg-white">
      <Head>
        <title>Messenger</title>
        <meta name="messenger" content="your chat messenger" />
      </Head>
      <div className="flex h-[90px] w-full place-content-between items-center px-2">
        <div className="flex items-center space-x-2">
          <div className="grid h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-gray-400 font-medium text-gray-600 dark:text-gray-300">
            JL
          </div>
          <div>
            <strong>Name</strong>
            <p>status</p>
          </div>
        </div>
        <div className="flex space-x-2">
          <svg
            id="cog.icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>

          <svg
            id="bell.icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
            />
          </svg>

          <svg
            id="magnifiying-glass.icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
      </div>

      <hr className="h-1 border-0 bg-slate-200" />

      <div className="flex h-[calc(100vh-100px)] flex-col justify-end px-2 pt-2">
        <div className="scrollbar flex flex-col overflow-y-scroll">
          <p className="self-center">{dateFormatter()}</p>
          {(function () {
            const s = [];
            for (let i = 0; i < 100; i++) {
              s.push(
                <div className=" my-1 flex flex-row">
                  <div className="mx-2 grid h-[24px] w-[24px] items-center justify-center overflow-hidden rounded-full bg-gray-400 text-[12px] text-gray-600 dark:text-gray-300">
                    JL
                  </div>
                  <div className="w-min max-w-[60%]">
                    <p className="relative break-words rounded-2xl bg-stone-100 px-3 py-1">
                      Messages MessagesMessagesMessagesMessagesMessages Messages
                    </p>
                    <p className="-mt-3 w-max rounded-b-[1.25rem] bg-blue-200 px-3 pt-3 pb-1 text-sm">
                      {timeFormatter()}
                    </p>
                  </div>
                </div>
              );
            }
            return s;
          })()}
          <div className=" my-1 flex flex-row">
            <div className="mx-2 grid h-[24px] w-[24px] items-center justify-center overflow-hidden rounded-full bg-gray-400 text-[12px] text-gray-600 dark:text-gray-300">
              JL
            </div>
            <div className="w-min max-w-[60%]">
              <p className="relative break-words rounded-2xl bg-indigo-200 px-3 py-1">
                Messages MessagesMessagesMessagesMessagesMessages Messages
              </p>
              <p className="-mt-3 w-max rounded-b-[1.25rem] bg-violet-300 px-3 pt-3 pb-1 text-sm">
                {timeFormatter()}
              </p>
            </div>
          </div>
          <div className=" flex flex-row-reverse">
            <div className="mx-2 grid h-[24px] w-[24px] items-center justify-center overflow-hidden rounded-full bg-gray-400 text-[12px] font-medium text-gray-600 dark:text-gray-300">
              JL
            </div>
            <div className="flex w-min max-w-[60%] flex-col">
              <p className="relative break-words rounded-2xl bg-green-300 px-3 py-1">
                Messages MessagesMessagesMessagesMessagesMessages Messages
              </p>
              <p className="-mt-3 w-max self-end rounded-b-[1.25rem] bg-teal-200 px-3 pt-3 pb-1 text-sm ">
                {timeFormatter()}
              </p>
            </div>
          </div>
        </div>

        <hr className="h-1 border-0 bg-slate-200" />

        <div className="mt-2 mb-2 flex w-full place-content-between rounded-[0.75rem] border-2 border-slate-500 px-2">
          <input
            type={"text"}
            className="my-2 mr-2 w-full break-words bg-transparent outline-none placeholder:text-slate-500"
            placeholder="Type Something..."
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="mt-2 h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
