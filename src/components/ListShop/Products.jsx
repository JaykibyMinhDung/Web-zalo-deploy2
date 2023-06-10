import React from "react";
import { Link } from "react-router-dom";

const Products = (props) => {
  const VND = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    currencyDisplay: "code",
  });
  return (
    <div className="bg-white">
      {/* max-w-2xl */}
      <div className="mx-auto  px-4 py-8 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 xl:gap-x-8">
          {props.products.map((e) => (
            <Link to="/detail" className="group">
              <div className=" relative aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <div className="absolute top-0 left-0 text-white p-2 bg-orange-navbar rounded-xl">
                  {e.discount}
                </div>
                <img
                  src={e.imageUrl}
                  alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{e.nameProduct}</h3>
              <div className="flex justify-between items-center">
                <p
                  style={{ fontSize: "small" }}
                  className="mt-1 text-lg font-medium text-gray-900"
                >
                  {VND.format(e.price)}
                </p>
                <div className="mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="rgb(255, 102, 0)"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7 14h-5v5h-4v-5h-5v-4h5v-5h4v5h5v4z" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}

          {/*  More products...  */}
        </div>
      </div>
    </div>
  );
};

export default Products;
