
const Loading = () => {
  return (
    <div
      className={`w-[100%] h-[100%] bg-black z-[100] fixed top-0 left-0 flex items-center justify-center`}
      id="authmodal"
    >
      {/* <div className="relative flex items-center justify-center flex-col gap-3 p-3 bg-white shadow-cardshadow rounded-lg"> */}
      <h1 className="text-4xl">Loading...</h1>
      {/* </div> */}
    </div>
  );
};

export default Loading;
