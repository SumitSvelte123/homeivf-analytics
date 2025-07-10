"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff, KeyRound, Mail } from "lucide-react";

import { cn } from "@/lib/utils";
import { useSignIn } from "@/hooks/auth";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import type { ILogin } from "@/types/auth.type";
import { Checkbox } from "@/components/ui/checkbox";
import { FieldError } from "@/components/field-error";

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>();

  const { mutate, isPending } = useSignIn();

  const onSubmit = (data: ILogin) => mutate(data);

  return (
    <form
      className={cn(
        "relative px-5 3xl:px-6 py-5 2xl:py-10 rounded-b-2xl bg-white space-y-8",
        isPending && "pointer-events-none"
      )}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="grid gap-0.5">
        <div
          className={cn(
            "flex items-center border-b border-black/60",
            errors.email && "border-red-500"
          )}
        >
          <Mail />
          <Input
            autoFocus
            placeholder="Email"
            className="border-none shadow-none focus-visible:ring-[0px]"
            {...register("email", { required: "Email is required" })}
          />
        </div>
        {errors.email && <FieldError message={errors.email.message} />}
      </div>
      <div className="grid gap-0.5">
        <div
          className={cn(
            "flex items-center border-b border-black/60",
            errors.password && "border-red-500"
          )}
        >
          <KeyRound />
          <Input
            type={!showPassword ? "password" : "text"}
            placeholder="Password"
            className="border-none shadow-none focus-visible:ring-[0px]"
            {...register("password", { required: "Password is required" })}
          />
          <button
            type="button"
            className="cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {!showPassword ? <Eye /> : <EyeOff />}
          </button>
        </div>
        {errors.password && <FieldError message={errors.password.message} />}
      </div>

      <div className="flex justify-between">
        <div className="flex items-center space-x-2">
          <Checkbox id="remember" className="border-black/60" />
          <Label
            htmlFor="remember"
            className="text-sm 3xl:text-base font-normal cursor-pointer"
          >
            Remember Me
          </Label>
        </div>
      </div>

      <div className="absolute w-full left-0 -bottom-[20px] flex justify-center">
        <Button
          size="lg"
          className="w-72 text-base 3xl:text-lg hover:bg-primary hover:cursor-pointer"
          disabled={isPending}
        >
          Login
        </Button>
      </div>
    </form>
  );
};
