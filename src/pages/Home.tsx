import React from "react";
import Carousel from "../Components/Carousel";
import LocationInfoCategory from "../Components/LocationInfoCategory";

type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
  return (
    <div className="">
      <div className="w-full">
        <Carousel />
      </div>
      <section className="max-w-xl m-auto">
        <LocationInfoCategory />
        
      </section>
    </div>
  );
};
export default Home;
