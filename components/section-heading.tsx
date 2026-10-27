import { Reveal } from "./reveal";

type SectionHeadingProps = {
  id: string;
  title: string;
  lead?: React.ReactNode;
};

export function SectionHeading({ id, title, lead }: SectionHeadingProps) {
  return (
    <Reveal className="mx-auto mb-12 max-w-2xl text-center">
      <h2
        id={id}
        className="font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl"
      >
        {title}
      </h2>
      <span className="mx-auto mt-4 block h-1 w-12 rounded-full bg-brand" />
      {lead && (
        <p className="mt-5 text-base font-medium text-gray-700">{lead}</p>
      )}
    </Reveal>
  );
}
