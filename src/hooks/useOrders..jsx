import { GetAllOrders } from "@/Services/OrderService";
import { useQuery } from "@tanstack/react-query";


export const useGetOrders = () =>
    useQuery({ queryKey: ["orders"], queryFn: GetAllOrders, retry: false });