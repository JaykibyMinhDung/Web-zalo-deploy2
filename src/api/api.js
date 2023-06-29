import client from "../util/baseUrl";

/* Optional chaining (?.)

const adventurer = {
  name: 'Alice',
  cat: {
    name: 'Dinah'
  }
};

const dogName = adventurer.dog?.name;
console.log(dogName);
// Expected output: undefined

console.log(adventurer.someNonExistentMethod?.());
// Expected output: undefined

*/

// api thao tác với reactquery
const username =
  "286024079704af9dedf4f893320733517211603af00a29ec34cb0e04699c86bd";
const password = "35F33ECAB48CF3672EE70D92AE6E5957";

// let test;

export const getToken = async () => {
  const { data } = await client({
    method: "GET",
    url: "api/auth/token",
    auth: {
      username: username,
      password: password,
    },
  });
  // test = data.data.token
  return data.data;
};

export const getBrand = async () => {
  const token = await getToken();
  const { data } = await client({
    method: "GET",
    url: "api/loyalty-app/brands?page=1&pageLimit=5&strSearch=",
    headers: {
      Authorization: "Bearer " + token.token,
    },
  });
  return data.data;
};

export const getNotification = async () => {
  const token2 =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvXC9hcGlcL2d5bS1sb3lhbHR5XC9sb2dpbiIsImlhdCI6MTY4NTMzMzEwMiwiZXhwIjoxNzE2NDM3MTAwLCJuYmYiOjE2ODUzMzMxMDIsImp0aSI6IndtYlVLQ3RWWUNwNndCUXciLCJzdWIiOjQ3NjEsInBydiI6Ijk0ZGJkOTYxYWFlZjBlM2NlNjZhZDdkNTBlNjQ3NzE3NjA5ZGRhMjQiLCJhcHBfdHlwZSI6Imd5bSIsInVzZXJfdHlwZSI6ImxveWFsdHlfdXNlciIsIm1lbWJlcl9pZCI6MTAzNzgwNX0.sixkNfaeatzRDGX08a8H1faTKxWxtfisCbeWZpAjk2I";
  const { data } = await client({
    method: "GET",
    url: "api/loyalty-app/notifications",
    headers: {
      Authorization: "Bearer " + token2,
    },
  });
  return data.data;
};

export const getNewsPaper = async () => {
  const token = await getToken();
  const { data } = await client({
    method: "GET",
    url: "api/loyalty-app/post?page=1&pageLimit=50&type=is_hot",
    headers: {
      Authorization: "Bearer " + token.token,
    },
  });
  return data.data;
};

export const getBanner = async () => {
  const test = await getToken();
  const { data } = await client({
    method: "GET",
    url: "api/loyalty-app/banner?page=1&pageLimit=50",
    headers: {
      Authorization: "Bearer " + test.token,
    },
  });
  return data.data;
};

export const searchProducts = async (NameProducts) => {
  const test = await getToken();
  const { data } = await client({
    method: "GET",
    url: `api/loyalty-app/sell/list-product?search[term]=${NameProducts}&pageLimit=50&filter_sort=price_asc`,
    headers: {
      Authorization: "Bearer " + test.token,
    },
  });
  return data.data;
};

export const getProductDetail = async (variation, unit, branch) => {
  const test = await getToken();
  const { data } = await client({
    method: "GET",
    url: `api/loyalty-app/sell/product-view?variation_id=${variation}&unit_id=${unit}&branch_id=${branch}`,
    headers: {
      Authorization: "Bearer " + test.token,
    },
  });
  return data.data;
};

// Cart & CheckOu

export const getProductCart = async () => {
  const test = await getToken();
  const { data } = await client({
    method: "GET",
    url: `loyalty-app/sell/purchase-orders?page=1&pageLimit=${2}&strSearch=${""}&search[shipping_status]=${"ordered"}`,
    headers: {
      Authorization: "Bearer " + test.token,
    },
  });
  return data.data;
};

export const postProductBuy = async () => {
  const test = await getToken();
  const { data } = await client({
    method: "POST",
    url: `loyalty-app/sell/orders`,
    data: {
      product: "",
    },
    headers: {
      Authorization: "Bearer " + test.token,
    },
  });
  return data.data;
};

export const postProductAdd = async () => {
  const test = await getToken();
  const { data } = await client({
    method: "POST",
    url: `loyalty-app/sell/orders`,
    data: {},
    headers: {
      Authorization: "Bearer " + test.token,
    },
  });
  return data.data;
};
