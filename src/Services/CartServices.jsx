import Http from "./HttpServices";


export function AddToCart(productId) {
  return Http.post("/cart/add", { productId }).then(({ data }) => data.data);
}

export function DecrementFromCart(productId) {
  return Http.post("/cart/remove", { productId }).then(({ data }) => data.data);
}
