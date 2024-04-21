import React from "react";
import { cn } from "../lib/utils";

const Button = ({ title, className }) => {
  return (
    <div
      className={cn(
        `font-mono cursor-pointer flex p-4 items-center border-[1px] border-primary text-primary rounded-md  max-w-fit hover:-translate-x-1 hover:-translate-y-1 duration-200 btn_hover_shadow`,
        className
      )}
    >
      {title}
    </div>
  );
};

export default Button;
