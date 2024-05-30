"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });


  const router = useRouter();

  const onSubmit: SubmitHandler<FieldValues> = (data, event) => {
    event?.preventDefault();

    axios
      .post("/api/register", data)
      .then(() => {
        router.push("/");
      });
  };

  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
        <h1 className="text-xl font-bold my-4">Register</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
          <input
            {...register("name")}
            type="text"
            placeholder="Full Name"
          />
          <input
            {...register("email")}
            type="text"
            placeholder="Email"
          />
          <input
            {...register("password")}
            type="password"
            placeholder="Password"
          />
          <button className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2">
            Register
          </button>

          <Link className="text-sm mt-3 text-right" href={"/"}>
            Already have an account? <span className="underline">Login</span>
          </Link>
        </form>
      </div>
    </div>
  );
}