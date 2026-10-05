import { InfoIcon, CheckCircleIcon } from "@phosphor-icons/react/dist/ssr";

function BlockRenderer({ block }) {
  switch (block.type) {
    case "paragraph":
      return <p className="mb-6">{block.text}</p>;

    case "list":
      if (block.style === "bullet") {
        return (
          <ul className="space-y-3 mb-6">
            {block.items.map((item, i) => (
              <li key={i} className="flex gap-3 items-start">
                <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        );
      }
      return (
        <ol className="space-y-4 mb-6">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-4 items-start">
              <span className="shrink-0 w-7 h-7 rounded-full bg-primary/10 border border-primary/20 text-primary flex items-center justify-center text-xs font-bold">
                {i + 1}
              </span>
              <span className="mt-0.5">{item}</span>
            </li>
          ))}
        </ol>
      );

    case "subheading":
      return <h4 className="text-xl font-bold text-white mt-8 mb-4">{block.text}</h4>;

    case "callout":
      return (
        <div className="my-8 p-5 md:p-6 rounded-2xl border border-primary/20 bg-primary/8 flex gap-4 items-start">
          <div className="shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
            <InfoIcon size={20} weight="fill" />
          </div>
          <div>
            <h5 className="text-white font-bold mb-1">{block.title}</h5>
            <p className="text-white/70 text-sm leading-relaxed">{block.text}</p>
          </div>
        </div>
      );

    case "table":
      return (
        <div className="my-8 rounded-2xl border border-white/10 overflow-hidden bg-tint-black-2">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-black/50 border-b border-white/10">
                  {block.headers.map((h, i) => (
                    <th key={i} className="px-5 py-4 text-sm font-semibold text-white/90">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/8">
                {block.rows.map((row, i) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors">
                    {row.map((cell, j) => (
                      <td key={j} className="px-5 py-4 text-sm text-white/70 align-top">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );

    default:
      return null;
  }
}

export default function LegalContent({ sections }) {
  return (
    <div className="space-y-16">
      {sections.map((section, idx) => {
        const num = `0${idx + 1}`.slice(-2);

        return (
          <section key={section.id} id={section.id} className="scroll-mt-32" aria-labelledby={`heading-${section.id}`}>
            <div className="flex gap-4 items-start mb-8">
              <span className="text-3xl md:text-5xl font-black leading-none select-none text-stroke-outlined-hover opacity-50 shrink-0">
                {num}
              </span>
              <div className="pt-1 md:pt-3">
                <h2 id={`heading-${section.id}`} className="heading-h4 text-white">
                  {section.title}
                </h2>
                <span className="block w-12 h-1 bg-gradient-to-r from-primary-start to-primary-end mt-3 rounded-full" />
              </div>
            </div>

            <div className="text-base leading-8 text-white/65">
              {section.blocks.map((block, i) => (
                <BlockRenderer key={i} block={block} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
