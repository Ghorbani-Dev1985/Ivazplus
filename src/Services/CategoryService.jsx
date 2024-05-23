import Http from "./HttpServices";

export function GetCategories() {
  return Http.get("/category/list").then(({ data }) => data.data);
}

export function GetCategoryById(id) {
  return Http.get(`/category/${id}`).then(({ data }) => data.data);
}

export function AddNewCategory(data) {
  return Http.post("/admin/category/add", data).then(({ data }) => data.data);
}

export function UpdateCategory({ id, data }) {
  return Http
    .patch(`/admin/category/update/${id}`, data)
    .then(({ data }) => data.data);
}

export function RemoveCategory(id) {
  return Http
    .delete(`/admin/category/remove/${id}`)
    .then(({ data }) => data.data);
}
