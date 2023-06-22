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
    url: "https://api-nextcrm.nextcrm.vn/api/auth/token",
    auth: {
      username: username,
      password: password,
    },
  });
  // test = data.data.token
  return data.data;
};

export const searchProducts = async (NameProducts) => {
  const test = await getToken();
  const { data } = await client({
    method: "GET",
    url: `https://api-nextcrm.nextcrm.vn/api/loyalty-app/sell/list-product?search[term]=${NameProducts}&pageLimit=50&filter_sort=price_asc`,
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
    url: `https://api-nextcrm.nextcrm.vn/api/loyalty-app/sell/product-view?variation_id=${variation}&unit_id=${unit}&branch_id=${branch}`,
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
