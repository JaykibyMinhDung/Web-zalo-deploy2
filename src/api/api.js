import client from "../util/baseUrl";

const username =
  "286024079704af9dedf4f893320733517211603af00a29ec34cb0e04699c86bd";
const password = "35F33ECAB48CF3672EE70D92AE6E5957";

export const getToken = async () => {
  const { data } = await client({
    method: "GET",
    url: "https://api-nextcrm.nextcrm.vn/api/auth/token",
    auth: {
      username: username,
      password: password,
    },
  });
  return data.data;
};

export const getProductDetail = async () => {
  // const { data } = await client({
  //   method: "GET",
  //   url: "https://api-nextcrm.nextcrm.vn/api/auth/token",
  //   auth: {
  //     username: username,
  //     password: password,
  //   },
  // });
  // return data.data;
};
