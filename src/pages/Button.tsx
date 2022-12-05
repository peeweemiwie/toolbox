import { Button } from "../components/Button/Button";
import { Section, SubSection } from "../components/Section/Section";

export const ButtonPage = () => {
  const arrTheme = ["primary", "secondary", "danger", "disabled"];
  return (
    <Section title="Button">
      <SubSection title="Solid Buttons" clx="grid gap-y-4">
        <div className="flex gap-x-4">
          {arrTheme.map((el) => (
            <Button text={el} kind="solid" theme={el} key={`solid-${el}`} />
          ))}
        </div>
        <div className="flex gap-x-4">
          {arrTheme.map((el) => (
            <Button
              text={el}
              kind="solid"
              size="sm"
              theme={el}
              key={`solid${el}`}
            />
          ))}
        </div>
        <div className="flex gap-x-4">
          {arrTheme.map((el) => (
            <Button
              text={el}
              kind="solid"
              size="lg"
              theme={el}
              key={`solid${el}`}
            />
          ))}
        </div>
      </SubSection>

      <SubSection title="Border Buttons" clx="grid gap-y-4">
        <div className="flex gap-x-4">
          {arrTheme.map((el) => (
            <Button text={el} kind="border" theme={el} key={`border-${el}`} />
          ))}
        </div>
        <div className="flex gap-x-4">
          {arrTheme.map((el) => (
            <Button
              text={el}
              kind="border"
              size="sm"
              theme={el}
              key={`solid${el}`}
            />
          ))}
        </div>
        <div className="flex gap-x-4">
          {arrTheme.map((el) => (
            <Button
              text={el}
              kind="border"
              size="lg"
              theme={el}
              key={`solid${el}`}
            />
          ))}
        </div>
      </SubSection>

      <SubSection title="Ghost Buttons" clx="grid gap-y-4">
        <div className="flex gap-x-4">
          {arrTheme.map((el) => (
            <Button text={el} kind="ghost" theme={el} key={`ghost-${el}`} />
          ))}
        </div>
        <div className="flex gap-x-4">
          {arrTheme.map((el) => (
            <Button
              text={el}
              kind="ghost"
              size="sm"
              theme={el}
              key={`solid${el}`}
            />
          ))}
        </div>
        <div className="flex gap-x-4">
          {arrTheme.map((el) => (
            <Button
              text={el}
              kind="ghost"
              size="lg"
              theme={el}
              key={`solid${el}`}
            />
          ))}
        </div>
      </SubSection>

      <SubSection title="Block Buttons" clx="grid gap-y-4">
        <div className="grid gap-y-4">
          {arrTheme.map((el) => (
            <Button
              text={el}
              kind="solid"
              theme={el}
              size="block"
              key={`solid-block-${el}`}
            />
          ))}
        </div>
      </SubSection>
    </Section>
  );
};
