import { useQuery } from "@tanstack/react-query";
import { GetUser } from "@/Services/AuthServices";

export const useGetUser = () =>
  useQuery({
    queryKey: ["getUser"],
    queryFn: GetUser,
    retry: false,
    refetchOnWindowFocus: true,
  });

export const useGetUsers = () =>
  useQuery({
    queryKey: ["getUsers"],
    queryFn: getAllUsers,
    retry: false,
    refetchOnWindowFocus: true,
  });
