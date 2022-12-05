import { ReactElement } from "react";
import { Section, SubSection } from "../Section/Section";
import "./Color.scss";
import { arrColors } from "./fixtues";

const swatches = arrColors.map((el) => {
  const arr: ReactElement[] = [];
  [...Array(9)].forEach((elem, i) => {
    const num = i + 1;
    arr.push(
      <div key={`${el}-${i}`} className={`tb-clr-${el}-${num}0 py-2 px-4`}>
        {el}-{num}0
      </div>
    );
  });
  return (
    <SubSection title={el}>
      <div>{arr}</div>
    </SubSection>
  );
});

export const ColorSwatch = () => {
  return (
    <SubSection title="Color Swatch">
      <div className="flex gap-x-4">{swatches}</div>
    </SubSection>
  );
};

interface Elements {
  style?: string;
  subTitle?: string;
}

export const ColorCombination = ({ style, subTitle }: Elements) => {
  const arrColorCombo: ReactElement[] = [];
  arrColors.map((el) => {
    arrColorCombo.push(
      <div key={el} className={`tb-${el}-${style} py-1 px-4 w-fit`}>
        {el}
      </div>
    );
  });
  return (
    <SubSection title={subTitle}>
      <div className="flex gap-x-4">{arrColorCombo}</div>
    </SubSection>
  );
};
