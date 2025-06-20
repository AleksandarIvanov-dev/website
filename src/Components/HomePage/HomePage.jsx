import React from "react";
import Header from "./HeaderHomePage";
import Body from "./BodyHomePage";
import Footer from "./FooterHomePage";

const HomePage = () => {
return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default HomePage;