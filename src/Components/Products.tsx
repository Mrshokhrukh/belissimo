import { Fragment } from "react/jsx-runtime";
import { categories, products } from "../db/data";
import Card from "./Card";

const Products = () => {
  return (
    <Fragment>
      {categories.map((category) => {
        return (
          <div>
            <h1 className="m-2.5 mt-12 font-semibold text-2xl" id={`${category}`}>{category}</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {products
                ?.filter((val) => val.category == category)
                .map((product) => {
                  return <Card product={product} />;
                })}
            </div>
          </div>
        );
      })}
    </Fragment>
  );
};

export default Products;
