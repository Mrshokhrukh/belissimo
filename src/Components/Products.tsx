import { Fragment } from "react/jsx-runtime";
import { categories } from "../db/data";
import Card from "./Card";
import { useQuery } from "react-query";
import axios from "axios";
import Loading from "./Loading";

const Products = () => {
  const { data, isLoading } = useQuery("products", () => {
    return axios.get("https://bellissimo-avt2.onrender.com/get_all_products");
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Fragment>
      {categories.map((category, i) => {
        return (
          <div key={i}>
            <h1 className="m-2.5 mt-12 font-semibold text-2xl" id={`${category}`}>
              {category}
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {data?.data
                // ?.filter((val: any) => val.category == category)
                .map((product: any, i: number) => {
                  return <Card product={product} key={i} />;
                })}
            </div>
          </div>
        );
      })}
    </Fragment>
  );
};

export default Products;
