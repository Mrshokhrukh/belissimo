import { products } from "../db/data";
import Card from "./Card";

const Products = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {products.map((product) => {
          return <Card product={product} />;
        })}
      </div>
    </div>
  );
};

export default Products;
