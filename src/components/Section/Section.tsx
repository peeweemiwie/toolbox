import { clsx } from "clsx";
interface Elements {
  children: any;
  clx?: string;
  title: string;
  subtitle?: string;
  other?: any;
}

export const Section = ({
  children,
  clx,
  subtitle,
  title,
  ...other
}: Elements) => {
  const sectionClx = clsx(clx, `tb-section grid gap-y-8`);
  return (
    <section className={sectionClx} {...other}>
      <h2 className="font-semibold text-2xl">{title}</h2>
      {subtitle && <h3>{subtitle}</h3>}
      {children}
    </section>
  );
};

export const SubSection = ({
  children,
  clx,
  subtitle,
  title,
  ...other
}: Elements) => {
  const subsectionClx = clsx(clx, `tb-subsection`);
  return (
    <section className={subsectionClx} {...other}>
      <h3 className="font-medium text-xl mb-1">{title}</h3>
      {subtitle && <h3>{subtitle}</h3>}
      {children}
    </section>
  );
};
