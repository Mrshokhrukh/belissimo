
interface Props {
  price: number;
}

const FormatPrice = ({ price }: Props) => {
  return (
    <>
      {price > 999 && price < 999999
        ? Math.floor(price / 1000) + "," + String(price).slice(-3)
        : Math.floor(price / 1000000) + "," + ((price / 1000) % 1000) + "," + String(price).slice(-3)}
    </>
  );
};

export default FormatPrice;
