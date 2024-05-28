import Http from "./HttpServices";


export function createPayment() {
  return Http.post("/payment/create").then(({ data }) => data.data);
}

export function getAllPayments() {
  return Http.get("/admin/payment/list").then(({ data }) => data.data);
}