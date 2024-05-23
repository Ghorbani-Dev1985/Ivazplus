import Http from "./HttpServices";


export function GetProducts(qs, cookies) {
  return Http
    .get(`/product/list?${qs}`, {
      headers: {
        Cookie: cookies,
      },
    })
    .then(({ data }) => data.data);
}

export function GetOneProductBySlug(slug) {
  return Http.get(`/product/slug/${slug}`).then(({ data }) => data.data);
}

export function GetOneProductById(id) {
  return Http.get(`/product/${id}`).then(({ data }) => data.data);
}
export function LikeProduct(id) {
  return Http.post(`/product/like/${id}`).then(({ data }) => data.data);
}

// admin relate function
export function AddProduct(data) {
  return Http.post(`/admin/product/add`, data).then(({ data }) => data.data);
}

export function RemoveProduct(id) {
  return Http.delete(`/admin/product/remove/${id}`).then(({ data }) => data.data);
}

export function UpdateProduct({ productId, data }) {
  console.log({ data });
  return Http
    .patch(`/admin/product/update/${productId}`, data)
    .then(({ data }) => data.data);
}
