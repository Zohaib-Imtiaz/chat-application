import Head from "next/head";
import Link from "next/link";

export default function Login() {
  return (
    <div className="grid h-screen place-items-center">
      <Head>
        <title>Login</title>
        <meta
          name="Chat Login Page"
          content="login page for a registered user"
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
          <button className="rounded border border-violet-400 hover:bg-violet-100">
            Login
          </button>
          <Link href="/registration/signup" className="justify-self-end">
            Signup
          </Link>
        </form>
      </main>
    </div>
  );
}
