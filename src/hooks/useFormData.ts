import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export interface FormData {
  email: string;
  password: string;
}

const schema = z.object({
  email: z
    .string()
    .min(5, { message: "Input your email" })
    .email("Input a valid email"),
  password: z.string().min(5, { message: "Password is too short" }),
});

export const useFormData = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  return {
    register,
    handleSubmit,
    errors,
    reset,
    showPassword,
    handleShowPassword,
  };
};
