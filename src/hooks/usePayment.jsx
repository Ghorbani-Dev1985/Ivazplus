import { getAllPayments } from "@/Services/PaymentService";
import { useQuery } from "@tanstack/react-query";


export const useGetPayments = () =>
    useQuery({ queryKey: ["payments"], queryFn: getAllPayments, retry: false });