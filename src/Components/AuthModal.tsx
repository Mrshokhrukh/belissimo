import React, { useContext, useEffect, useRef, useState } from "react";
import { SlClose } from "react-icons/sl";
import { ChangeCategory } from "../hooks/ContextProvider";
type AuthModalProps = {};

const AuthModal: React.FC<AuthModalProps> = () => {
  const [authNumber, setAuthNumber] = useState<any>("+998(__)___-__-__");
  const [isFill, setIsFill] = useState<boolean>(false);

  const { setIsAuthModalOpen, isAuthModalOpen } = useContext(ChangeCategory);

  let inputRef = useRef<any>(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const formatPhoneNumber = (value: string) => {
    const digits = value.replace(/[^0-9]/g, "");

    if (digits.length <= 3) {
      return `+998(${digits}`;
    }

    const match = digits.match(/^(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})$/);
    if (match) {
      return `+998(${match[2]})${match[3]} ${match[4]} ${match[5]}`;
    }

    return `+998(${digits.slice(3, 5)})${digits.slice(5, 8)} ${digits.slice(8, 10)} ${digits.slice(
      10,
      12
    )}`;
  };

  const checkNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatPhoneNumber(e.target.value);

    setAuthNumber(formattedValue);

    if (formattedValue.length === 17) {
      setIsFill(true);
    } else setIsFill(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(authNumber);
  };

  return (
    <div
      className={`${
        isAuthModalOpen ? "" : "hidden"
      } w-[100%] h-[100%] bg-black z-[100] fixed top-0 left-0 flex items-center justify-center`}
      id="authmodal"
    >
      <div className="relative flex items-center justify-center flex-col gap-3 p-3 w-[400px] h-[400px] bg-white shadow-cardshadow rounded-lg">
        <h1 className="text-center text-2xl">Raqamingizni kiriting</h1>
        <SlClose
          className="absolute right-3 top-4 text-3xl cursor-pointer"
          onClick={() => setIsAuthModalOpen(false)}
        />
        <form className="flex flex-col gap-3 items-center" onSubmit={handleSubmit}>
          <input
            type="text"
            id="phoneNumber"
            value={authNumber}
            onChange={checkNumber}
            ref={inputRef}
            className={`${
              authNumber == "+998(__)___-__-__" ? "text-cardDescColor" : "text-black"
            } p-3 bg-graybtn rounded-2xl outline-none text-2xl text-center`}
          />

          <button
            className={`w-[80%] ${
              isFill ? "bg-green" : "bg-graybtn"
            } text-white font-semibold p-3 rounded-full`}
          >
            kodni qabul qilish
          </button>
        </form>
      </div>
    </div>
  );
};
export default AuthModal;
