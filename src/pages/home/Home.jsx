import React from "react";
import SearchComponent from "../../components/SearchComponent/SearchComponent";
import Navbar from "../../components/navbar/Navbar";
import Owl from "../../components/owl/Owl";
import { GoogleOAuthProvider } from "@react-oauth/google";

import Footer from "../../components/footer/Footer";
import SlickComponent from "../../components/slickComponent/SlickComponent";
import Donate from "../../components/Adds/Donate/Donate";
import FoodAdd from "../../components/Adds/Food/FoodAdd";
import RandomToDo from "../../components/RandomToDo/RandomToDo";

const Home = () => {
  return (
    <div>
      <GoogleOAuthProvider clientId="165093153283-shjo35g4u2vh5tughu7i1ei04eaq4urc.apps.googleusercontent.com">
        <Navbar />
        <SearchComponent />
        <Owl />
        <Donate />
        <SlickComponent />
        <RandomToDo />
        <FoodAdd />
        <Footer />
      </GoogleOAuthProvider>
    </div>
  );
};

export default Home;
