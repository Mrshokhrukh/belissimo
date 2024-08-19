import Masalliqlar from "./Masalliqlar";

interface Props {}

const ProductModalMasalliqlar = ({}: Props) => {
  return (
    <div className="pt-5">
      <div className="w-full flex justify-between items-center">
        <h1 className="font-semibold text-lg">Masalliqlarni tanlang</h1>
        <div className="bg-orange rounded-full px-4 py-1.5 font-sans font-semibold">0 / 15</div>
      </div>
      <Masalliqlar />
    </div>
  );
};

export default ProductModalMasalliqlar;
