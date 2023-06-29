import React from "react";
import Bar from "../../styles/bar/Bar";
import { useQuery } from "react-query";
import { GET_BRAND } from "../../constants/queryKeys";
import { getBrand } from "../../api/api";
import HeadersPage from "../../styles/headerspage/HeadersPage";
import { FaChevronLeft } from "react-icons/fa";

const Brand = () => {
  const { data, isLoading } = useQuery([GET_BRAND], () => getBrand());
  if (isLoading) {
    return <div>loading...</div>;
  }
  //   console.log(data);

  return (
    <div>
      <HeadersPage icon={FaChevronLeft} title={"Chi nhánh"} />
      {data.map((e) => (
        <Bar key={e.id} image={e.image} title={e.name} desc={e.description} />
      ))}
    </div>
  );
};

export default Brand;
