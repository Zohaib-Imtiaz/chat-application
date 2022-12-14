export default function MessageInput() {
  return (
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
  );
}
