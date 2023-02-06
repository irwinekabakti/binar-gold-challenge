import React from "react";
import CardDetail from "../components/CardDetail/CardDetail";
import Empty from "../components/Empty/Empty";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import LockSearchBar from "../components/SearchBar/LockSearchBar";

const Detail = () => {
  return (
    <div>
      <header>
        <Navbar />
        <Empty />
      </header>
      <main>
        <LockSearchBar />
        <CardDetail />
      </main>
      <Footer />
    </div>
  );
};

export default Detail;
