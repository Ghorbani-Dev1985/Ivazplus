import { AddToCart, DecrementFromCart } from "@/Services/CartServices";
import { useMutation } from "@tanstack/react-query";

export const useAddToCart = () => useMutation({mutationFn : AddToCart});

export const useDecrementFromCart = () =>
    useMutation({
      mutationFn: DecrementFromCart,
    });
  