import React from "react";
import Card from "../../styles/card/Card";
import { FaChevronLeft } from "react-icons/fa";
import HeadersPage from "../../styles/headerspage/HeadersPage";
import { useQuery } from "react-query";
import { getNewsPaper } from "../../api/api";
import { GET_PAPER } from "../../constants/queryKeys";

const News = () => {
  const { data, isLoading } = useQuery([GET_PAPER], () => getNewsPaper());
  if (isLoading) {
    return <div>loading...</div>;
  }
  // console.log(data);
  return (
    <div>
      <HeadersPage icon={FaChevronLeft} title={"NewsPaper"} />
      {data.map((e) => (
        <Card
          key={e.title}
          image={e.picture}
          title={e.title}
          desc={e.body}
          href={e.url}
        />
      ))}
    </div>
  );
};

export default News;
