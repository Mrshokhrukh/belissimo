import React, { useEffect, useRef, useState } from "react";
import Carousel from "../Components/Carousel";
import LocationInfoCategory from "../Components/LocationInfoCategory";
import Categories from "../Components/Categories";
import Products from "../Components/Products";

type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
  const [isSticky, setIsSticky] = useState(false);
  const headerRef = useRef<any>(null);

  const handleScroll = () => {
    if (headerRef.current) {
      setIsSticky(headerRef.current.getBoundingClientRect().top <= 0);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="w-full">
        <Carousel />
      </div>
      <section className="max-w-xl m-auto">
        <div>
          <LocationInfoCategory />
        </div>
      </section>
      <section
        ref={headerRef}
        className={`flex items-center gap-4 mt-10 w-[100%] m-auto sticky top-0 bg-white z-50 px-20 ${
          isSticky ? "shadow-headShadow" : ""
        }`}
      >
        <img
          className={` ${isSticky ? `w-[35px]` : "w-[0px]"} transition-all duration-200`}
          src="https://bellissimo.uz/_next/image?url=%2Fimages%2Ficon.png&w=1920&q=75"
          alt=""
        />

        <Categories />
      </section>
      <section className="max-w-xl m-auto">
        <div className="mt-10">
          <Products />
        </div>
      </section>
    </div>
  );
};
export default Home;
