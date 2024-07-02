import React, { useEffect, useRef, useState } from "react";
import { SlClose } from "react-icons/sl";
type AuthModalProps = {};

const AuthModal: React.FC<AuthModalProps> = () => {
  const [authNumber, setAuthNumber] = useState<any>("+998(__)___-__-__");
  let inputRef = useRef<any>(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const checkNumber = () => {
    console.log("hello");

    if (authNumber.length === 17) {
    }
  };

  return (
    <div
      className="w-[100%] h-[100%] bg-black z-[100] fixed top-0 left-0 flex items-center justify-center"
      id="authmodal"
    >
      <div className="relative flex items-center justify-center flex-col gap-3 p-3 w-[400px] h-[400px] bg-white shadow-cardshadow rounded-lg">
        <h1 className="text-center text-2xl">Raqamingizni kiriting</h1>
        <SlClose className="absolute right-3 top-4 text-3xl cursor-pointer" />
        <form className="flex flex-col gap-3 items-center">
          <input
            type="text"
            value={authNumber}
            onChange={checkNumber}
            max={17}
            ref={inputRef}
            className={`${
              authNumber == "+998(__)___-__-__" ? "text-cardDescColor" : "text-black"
            } p-3 bg-graybtn rounded-2xl outline-none text-2xl text-center`}
          />

          <button className="w-[80%] bg-graybtn text-white font-semibold p-3 rounded-full">kodni qabul qilish</button>
        </form>
      </div>
    </div>
  );
};
export default AuthModal;
