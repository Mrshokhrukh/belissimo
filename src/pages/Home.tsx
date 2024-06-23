import React from "react";
import Carousel from "../Components/Carousel";
import LocationInfoCategory from "../Components/LocationInfoCategory";
import Categories from "../Components/Categories";
import Products from "../Components/Products";

type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
  return (
    <div className="p-2.5">
      <div className="w-full">
        <Carousel />
      </div>
      <section className="max-w-xl m-auto">
        <div>
          <LocationInfoCategory />
        </div>
        <div className="mt-10">
          <Categories />
        </div>
        <div className="mt-10">
          <Products />
        </div>
      </section>
    </div>
  );
};
export default Home;
