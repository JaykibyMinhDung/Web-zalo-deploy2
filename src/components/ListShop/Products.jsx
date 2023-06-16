import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useQuery } from "react-query";
import { useRecoilValue } from "recoil";
import client from "../../util/baseUrl";
import { receiveToken, receiveKeyCategory } from "../../store/token";
import "./products.css";

const Products = (props) => {
  const token2 = useRecoilValue(receiveToken);
  const keyCategory = useRecoilValue(receiveKeyCategory);
  const VND = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    currencyDisplay: "code",
  });
  // const { isLoading, isError, data } = useQuery({
  //   queryKey: ["products"],
  //   queryFn: () =>
  //     client({
  //       method: "GET",
  //       url: "api/loyalty-app/sell/list-product?page=1&search[branch_id]=1&pageLimit=50&filter_sort=price_asc",
  //       headers: {
  //         Authorization: "Bearer " + token2,
  //       },
  //     })
  //       .then((results) => {
  //         console.log(results);
  //       })
  //       .then((product) => product.data),
  // });

  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["productsData"],
    queryFn: () =>
      client
        .get(
          "api/loyalty-app/sell/list-product?page=1&search[category_id]=4217&pageLimit=50&filter_sort=price_asc",
          {
            headers: {
              Authorization: "Bearer " + token2,
            },
          }
        )
        .then((res) => res.data),
  });

  if (isLoading) return "Loading...";

  const filterProducts = () => {
    return data.data.filter((e) => e.product_id === keyCategory);
  };

  console.log(data);

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="relative  top-44 bg-white">
      <div className="mx-auto  px-4 py-8 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 xl:gap-x-8">
          {!keyCategory
            ? data.data.map((e) => (
                // height full
                <Link
                  to="/detail"
                  className="group p-3 border h-full"
                  key={e.product_id}
                >
                  {/* height h-full */}
                  <div className="relative aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 border">
                    <div className="absolute top-0 left-0 text-white p-2 bg-orange-navbar rounded-ss rounded-ee-lg">
                      -{e.price}
                    </div>

                    <div>
                      {/* height width h-64*/}
                      <img
                        src={e.product_image}
                        alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                        className="h-56 w-full object-cover object-center group-hover:opacity-75"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <h3 className="products__title">{e.name}</h3>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="products__price">{VND.format(e.price)}</p>
                    </div>
                    <div className="mt-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="rgb(255, 102, 0)"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7 14h-5v5h-4v-5h-5v-4h5v-5h4v5h5v4z" />
                      </svg>
                    </div>
                  </div>
                  <del
                    style={{ fontSize: "small", color: "rgb(201, 201, 201)" }}
                  >
                    {VND.format(e.price)}
                  </del>
                </Link>
              ))
            : filterProducts().map((e) => (
                // height full
                <Link
                  to="/detail"
                  className="group p-3 border h-full"
                  key={e.product_id}
                >
                  {/* height h-full */}
                  <div className="relative aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 border">
                    <div className="absolute top-0 left-0 text-white p-2 bg-orange-navbar rounded-ss rounded-ee-lg">
                      -{e.price}
                    </div>

                    <div>
                      {/* height width h-64*/}
                      <img
                        src={e.product_image}
                        alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                        className="h-56 w-full object-cover object-center group-hover:opacity-75"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <h3 className="products__title">{e.name}</h3>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="products__price">{VND.format(e.price)}</p>
                    </div>
                    <div className="mt-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="rgb(255, 102, 0)"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7 14h-5v5h-4v-5h-5v-4h5v-5h4v5h5v4z" />
                      </svg>
                    </div>
                  </div>
                  <del
                    style={{ fontSize: "small", color: "rgb(201, 201, 201)" }}
                  >
                    {VND.format(e.price)}
                  </del>
                </Link>
              ))}
          {/*  More products...  */}
        </div>
      </div>
    </div>
  );
};

export default Products;
