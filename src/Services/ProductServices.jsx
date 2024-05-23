import http from "./httpService";

export function GetProducts(qs, cookies) {
  return http
    .get(`/product/list?${qs}`, {
      headers: {
        Cookie: cookies,
      },
    })
    .then(({ data }) => data.data);
  // return fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/list?${qs}`, {
  //   cache: "no-store",
  // })
  //   .then((res) => res.json())
  //   .then(({ data }) => data);
}

export function GetOneProductBySlug(slug) {
  return http.get(`/product/slug/${slug}`).then(({ data }) => data.data);
}

export function GetOneProductById(id) {
  return http.get(`/product/${id}`).then(({ data }) => data.data);
}
export function LikeProduct(id) {
  return http.post(`/product/like/${id}`).then(({ data }) => data.data);
}

// admin relate function
export function AddProduct(data) {
  return http.post(`/admin/product/add`, data).then(({ data }) => data.data);
}

export function RemoveProduct(id) {
  return http.delete(`/admin/product/remove/${id}`).then(({ data }) => data.data);
}

export function UpdateProduct({ productId, data }) {
  console.log({ data });
  return http
    .patch(`/admin/product/update/${productId}`, data)
    .then(({ data }) => data.data);
}
