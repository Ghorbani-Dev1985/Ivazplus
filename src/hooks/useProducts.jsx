import { AddProduct, GetOneProductById, GetProducts, RemoveProduct, UpdateProduct } from "@/Services/ProductServices";
  import { useMutation, useQuery } from "@tanstack/react-query";
  
  export const useGetProducts = () =>
    useQuery({
      queryKey: ["getProducts"],
      queryFn: GetProducts,
      retry: false,
      refetchOnWindowFocus: true,
    });
  
  export const useAddProduct = () => {
    return useMutation({ mutationFn: AddProduct });
  };
  
  export const useUpdateProduct = () => {
    return useMutation({ mutationFn: UpdateProduct });
  };
  
  export const useRemoveProduct = () => {
    return useMutation({ mutationFn: RemoveProduct });
  };
  
  export const useGetProductById = (id) =>
    useQuery({
      queryKey: ["getProduct", id],
      queryFn: () => GetOneProductById(id),
      retry: false,
      refetchOnWindowFocus: true,
    });
  