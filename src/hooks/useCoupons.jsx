import { AddNewCoupon, DeleteCoupon, GetAllCoupon, GetOneCoupon, UpdateCoupon } from "@/Services/CouponService";
  import { useMutation, useQuery } from "@tanstack/react-query";
  
  export const useGetCoupons = () =>
    useQuery({
      queryKey: ["getCoupons"],
      queryFn: GetAllCoupon,
      retry: false,
      refetchOnWindowFocus: true,
    });
  
  export const useGetOneCoupon = (id) =>
    useQuery({
      queryKey: ["getCoupon", id],
      queryFn: () => GetOneCoupon(id),
      retry: false,
      refetchOnWindowFocus: true,
    });
  
  export const useAddNewCoupon = () => useMutation({ mutationFn: AddNewCoupon });
  
  export const useUpdateCoupon = () => useMutation({ mutationFn: UpdateCoupon });
  
  export const useRemoveCoupon = () => useMutation({ mutationFn: DeleteCoupon });
  