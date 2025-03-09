import UseColor from "@/app/constants/Color";
import React from "react";

type TextType = "title" | "subtitle" | "paragraph" | "caption";

type Props = {
  text: string;
  type?: TextType;
  className?: string;
};

const TextComponent = ({ text, type = "paragraph", className }: Props) => {
    const color = UseColor();
    const styles: Record<TextType, string> = {
    title: "text-3xl font-bold",
    subtitle: "text-2xl font-semibold",
    paragraph: "text-base font-normal",
    caption: "text-sm italic"
  };

  return <p className={`${styles[type]} ${className}`} style={{ fontFamily: "'Poppins', sans-serif"}}>{text}</p>;
};

export default TextComponent;
