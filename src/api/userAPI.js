import "whatwg-fetch";
import getBaseURL from "./baseUrl";

const baseUrl = getBaseURL();

export function getUsers() {
  return get("users");
}

export function deleteUser(id) {
  return del(`users/${id}`);
}

function get(url) {
  return fetch(baseUrl + url).then(onSuccess, onError);
}

// Can't call func delete since it's a reserved word
function del(url) {
  const request = new Request(baseUrl + url, {
    method: "DELETE",
  });

  return fetch(request).then(onSuccess, onError);
}

function onSuccess(response) {
  return response.json();
}

function onError(error) {
  console.log(error); // eslint-disable-line no-console
}
