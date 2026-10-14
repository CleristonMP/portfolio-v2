interface SectionHeadingProps {
  readonly kicker: string;
  readonly title: string;
  readonly lead: string;
}
export function SectionHeading({ kicker, title, lead }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <div>
        <p className="kicker">{kicker}</p>
        <h2>
          {title}
          <span className="dot">.</span>
        </h2>
      </div>
      <p>{lead}</p>
    </div>
  );
}
