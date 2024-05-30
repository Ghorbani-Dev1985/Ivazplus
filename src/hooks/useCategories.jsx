import { AddNewCategory, GetCategories, GetCategoryById, RemoveCategory, UpdateCategory } from "@/Services/CategoryService";
  import { useMutation, useQuery } from "@tanstack/react-query";
  
  export const useGetCategories = () =>
    useQuery({
      queryKey: ["getCategories"],
      queryFn: GetCategories,
      retry: false,
      refetchOnWindowFocus: true,
    });
  
  export const useGetCategoryById = (id) =>
    useQuery({
      queryKey: ["getCategory", id],
      queryFn: () => GetCategoryById(id),
      retry: false,
      refetchOnWindowFocus: true,
    });
  
  export const useAddCategory = () => useMutation({ mutationFn: AddNewCategory });
  
  export const useUpdateCategory = () =>
    useMutation({ mutationFn: UpdateCategory });
  
  export const useRemoveCategory = () => {
    return useMutation({ mutationFn: RemoveCategory });
  };
  