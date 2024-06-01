import Http from "./HttpServices";


export function CreateOrder() {
  return Http.post("/payment/create").then(({ data }) => data.data);
}

export function GetAllOrders() {
  return Http.get("/admin/payment/list").then(({ data }) => data.data);
}