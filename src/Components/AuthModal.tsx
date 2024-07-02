import React from "react";

type AuthModalProps = {};

const AuthModal: React.FC<AuthModalProps> = () => {
  return (
    <div
      className="w-[100%] h-[100%] bg-black z-[100] fixed top-0 left-0 flex items-center justify-center"
      id="authmodal"
    >
      <div className="w-[400px] h-[400px] bg-white shadow-cardshadow rounded-lg">
        <h1>hello world</h1>
      </div>
    </div>
  );
};
export default AuthModal;
