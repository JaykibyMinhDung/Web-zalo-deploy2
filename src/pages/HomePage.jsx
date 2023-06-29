import React from "react";

import { Fragment } from "react";
import Header from "../components/home/header/Header";
import Footer from "../components/home/footer/Footer";
import Banner from "../components/home/banner/Banner";

export default function HomePage() {
  return (
    <Fragment>
      <Header />
      <Banner />
      <Footer />
    </Fragment>
  );
}
