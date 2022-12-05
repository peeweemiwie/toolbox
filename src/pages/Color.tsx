import { Section } from "../components/Section/Section";
import { ColorSwatch, ColorCombination } from "../components/Color/Color";

export const Color = () => {
  return (
    <Section title="Color">
      <ColorSwatch />
      <h3>Default Color Combination</h3>
      <ColorCombination subTitle="Solid" style="solid" />
      <ColorCombination subTitle="Border" style="border" />
    </Section>
  );
};
