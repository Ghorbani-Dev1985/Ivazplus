import { AddToCart } from "@/Services/CartServices";
import { useMutation } from "@tanstack/react-query";

export const useAddToCart = () => useMutation({mutationFn : AddToCart});
