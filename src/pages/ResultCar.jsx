import React from "react";
import Navbar from "../components/Navbar/Navbar";
import CardCar from "../components/CardCar/CardCar";
import Footer from "../components/Footer/Footer";
import Empty from "../components/Empty/Empty";

const ResultCar = () => {
  return (
    <div>
      <header>
        <Navbar />
        <Empty />
      </header>
      <main>
        <CardCar />
      </main>
      <Footer />
    </div>
  );
};

export default ResultCar;
