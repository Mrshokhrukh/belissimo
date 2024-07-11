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
    if (isSticky) {
      headerRef.current.style = `
      background: rgba(255, 255, 255, 0.37);
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(14.7px);
      -webkit-backdrop-filter: blur(14.7px);`;
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
      <section className="max-w-xl m-auto px-2 mt-5">
        <div className="">
          <LocationInfoCategory />
        </div>
      </section>
      <section
        ref={headerRef}
        className={`flex items-center md:justify-center gap-4 mt-10 w-[100%] m-auto sticky top-0 bg-white z-50  ${
          isSticky ? "shadow-headShadow" : ""
        }`}
      >
        <Categories isSticky={isSticky} />
      </section>
      <section className="max-w-xl m-auto">
        <div className="mt-10 px-3">
          <Products />
        </div>
      </section>
    </div>
  );
};
export default Home;
