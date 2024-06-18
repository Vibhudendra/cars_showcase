"use client";


import Image from "next/image";
import { PrimaryButtonProps } from "@/types";

const PrimaryButton = ({
  title,
  Additionalclasses,
  handleClick,
  btnType,
  textStyles,
  rightIcon,
  isDisabled
  
}: PrimaryButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${Additionalclasses}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image 
          src={rightIcon}
          alt="right icon"
          fill
          className="object-contain"
          />
        </div>
      )}
    </button>
  );
};

export default PrimaryButton;
