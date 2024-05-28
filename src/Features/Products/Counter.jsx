import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { HiMinus, HiOutlinePlus, HiOutlineTrash } from "react-icons/hi";
import { useAddToCart, useDecrementFromCart } from "src/hooks/useCart";

const Counter = ({ quantity, id , countInStock}) => {
  const { isLoading, mutateAsync: AddToCarAsync } = useAddToCart();
  const { mutateAsync: DecFromCartAsync } = useDecrementFromCart();
  const queryClient = useQueryClient();
  const AddToCartHandler = async () => {
    try {
      const { message } = await AddToCarAsync(id);
      toast.success(message);
      queryClient.invalidateQueries({ queryKey: ["getUser"]});
    } catch (error) {
      if (error?.response?.data) {
        toast.error(error.response.data.message);
      }
    }
  };
  const DecrementHandler = async () => {
    try {
      const { message } = await DecFromCartAsync(id);
      toast.success(message);
      queryClient.invalidateQueries({ queryKey: ["getUser"] });
    } catch (error) {
      if (error?.response?.data) {
        toast.error(error.response.data.message);
      }
    }
  };
  return (
    <div className="w-44 h-12 flex-center border border-gray-200 rounded-lg px-1.5">
      <button disabled={quantity === countInStock && true} onClick={AddToCartHandler} className="w-10 h-12 disabled:text-gray-400 flex-center">
        <HiOutlinePlus className="size-5" />
      </button>
      <input
        type="number"
        value={quantity || 1}
        className="w-full h-12 text-center border-t border-b border-gray-200 outline-none px-10 text-lg"
      />
      <button
        onClick={DecrementHandler}
        className="w-10 h-12 flex-center disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {quantity > 1 ? (
          <HiMinus className="size-5" />
        ) : (
          <HiOutlineTrash className="size-6 text-rose-500" />
        )}
      </button>
    </div>
  );
};

export default Counter;
