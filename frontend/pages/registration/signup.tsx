import Head from "next/head";
import Link from "next/link";

export default function SignUp() {
  return (
    <div className="grid h-screen place-items-center">
      <Head>
        <title>SignUp</title>
        <meta
          name="Chat SignUp Page"
          content="SignUp to use chat application"
        />
      </Head>
      <main className="w-3/4 max-w-[500px]">
        <form
          className="grid w-3/4 max-w-[500px] gap-2"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="group my-2 flex flex-col place-content-between">
            <input
              className="peer rounded-full border border-violet-400 px-3 py-1 focus:outline-violet-400"
              type={"text"}
              id="email"
            />
            <label
              htmlFor="email"
              className="absolute translate-y-1 translate-x-3 transform duration-300 peer-focus:-translate-y-6 peer-focus:text-cyan-600"
            >
              Email
            </label>
          </div>
          <div className="group my-2 flex flex-col place-content-between">
            <input
              className="peer rounded-full border border-violet-400 px-3 py-1 focus:outline-violet-400"
              type={"text"}
              id="password"
            />
            <label
              htmlFor="password"
              className="absolute translate-y-1 translate-x-3 transform duration-300 peer-focus:-translate-y-6 peer-focus:text-cyan-600"
            >
              Password
            </label>
          </div>
          <div className="group my-2 flex flex-col place-content-between">
            <input
              className="peer rounded-full border border-violet-400 px-3 py-1 focus:outline-violet-400"
              type={"text"}
              id="confirm-password"
            />
            <label
              htmlFor="confirm-password"
              className="absolute translate-y-1 translate-x-3 transform duration-300 peer-focus:-translate-y-6 peer-focus:text-cyan-600"
            >
              Confirm Password
            </label>
          </div>
          <button className="rounded border border-violet-400 hover:bg-violet-100">
            Login
          </button>
          <Link href="/registration/login" className="justify-self-end">
            Login
          </Link>
        </form>
      </main>
    </div>
  );
}
