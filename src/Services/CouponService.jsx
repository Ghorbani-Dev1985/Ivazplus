import Http from "./HttpServices";


export function GetAllCoupon() {
  return Http.get("/admin/coupon/list").then(({ data }) => data.data);
}

export function GetOneCoupon(id) {
  return Http.get(`/admin/coupon/${id}`).then(({ data }) => data.data);
}
export function AddNewCoupon(data) {
  return Http.post("/admin/coupon/add", data).then(({ data }) => data.data);
}

export function UpdateCoupon({ id, data }) {
  return Http
    .patch(`/admin/coupon/update/${id}`, data)
    .then(({ data }) => data.data);
}

export function DeleteCoupon(id) {
  return Http
    .delete(`/admin/coupon/remove/${id}`)
    .then(({ data }) => data.data);
}
