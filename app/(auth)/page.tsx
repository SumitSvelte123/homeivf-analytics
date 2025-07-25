import { LoginForm } from "@/components/auth/login";

export default function LoginPage() {
  return (
    <div className="container m-auto h-full grid justify-end items-center bg-[url(/auth-bg.svg)] bg-left-bottom bg-contain bg-no-repeat 2xl:bg-size-[65rem]">
      <div className="flex justify-end items-center w-full h-full px-5">
        <div className="lg:w-md 3xl:w-lg max-w-md h-auto border-1 border-black/60 bg-primary rounded-2xl">
          <div className="p-4 3xl:p-6 rounded-t-2xl space-y-2 3xl:space-y-3">
            <h1 className="text-2xl 3xl:text-4xl font-semibold text-white">
              Sign In
            </h1>
            <p className="text-white text-sm 3xl:text-base">
              Streamline your work orders, track them in real time, and manage
              your logistics efficiently — all in one place.
            </p>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
