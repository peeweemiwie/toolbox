import { ReactElement } from "react";
import { clsx } from "clsx";
import "./Button.scss";

interface Elements {
  clx?: string;
  kind: "solid" | "border" | "ghost";
  other?: ReactElement;
  size?: "sm" | "md" | "lg" | "block";
  theme: "primary" | "secondary" | "disabled" | "danger";
  text: string;
}
export const Button = ({ clx, kind, other, size, theme, text }: Elements) => {
  const btnClx = clsx(
    clx,
    { "w-fit": size !== "block" },
    `tb-btn-${size}`,
    `tb-${theme}-${kind}`,
    "tb-btn rounded"
  );
  return (
    <button className={btnClx} {...other} disabled={theme === "disabled"}>
      {text}
    </button>
  );
};
