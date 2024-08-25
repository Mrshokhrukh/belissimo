import FormatPrice from "./formatPrice";

interface Props {
  productData: any;
}

const ComboOptionItemCard = ({ productData }: Props) => {
  // const [selectedData, setSelectedData] = useState<any>();

  return (
    <div
      className={`${productData._id} gap-2 p-2 flex flex-col justify-center items-center cursor-pointer h-[280px] shadow-cardshadow rounded-xl 
      hover:scale-[102%] transition-all duration-200`}
      onClick={() => ""}
    >
      <img src={productData?.image} alt="" className="h-[50%] object-cover mb-5" />
      <button className="rounded-full border-green border-2 bg-lightgreen py-1 px-2.5 font-semibold text-green">
        +{<FormatPrice price={productData?.new_price} />} so'm
      </button>
      <p className="font-medium">{productData?.name}</p>
    </div>
  );
};

export default ComboOptionItemCard;
