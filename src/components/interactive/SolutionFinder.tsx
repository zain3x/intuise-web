import { useMemo, useState } from "react";
import type { SolutionOption } from "../../types/site";
import { buildProjectMailto } from "../../utils/mailto";

type Props = { options: SolutionOption[] };

export default function SolutionFinder({ options }: Props) {
  const [selectedId, setSelectedId] = useState(options[0]?.id ?? "");
  const selected = useMemo(
    () => options.find((option) => option.id === selectedId),
    [options, selectedId],
  );

  if (!selected) {
    return (
      <p role="status" className="finder-empty">
        Solution directions are temporarily unavailable. Email
        rindra@intuise.com to start a brief.
      </p>
    );
  }

  return (
    <div className="finder-shell">
      <fieldset className="finder-options">
        <legend className="sr-only">Choose what you are building</legend>
        {options.map((option) => (
          <label
            className={option.id === selected.id ? "is-selected" : ""}
            key={option.id}
          >
            <input
              type="radio"
              name="project-type"
              value={option.id}
              checked={option.id === selected.id}
              onChange={() => setSelectedId(option.id)}
            />
            <span>{option.label}</span>
          </label>
        ))}
      </fieldset>
      <section
        className="finder-result"
        aria-live="polite"
        aria-labelledby="finder-result-title"
      >
        <p className="eyebrow">Suggested direction</p>
        <h3 id="finder-result-title">{selected.label}</h3>
        <dl>
          <div>
            <dt>Problem</dt>
            <dd>{selected.problem}</dd>
          </div>
          <div>
            <dt>Direction</dt>
            <dd>{selected.direction}</dd>
          </div>
          <div>
            <dt>Outcome</dt>
            <dd>{selected.outcome}</dd>
          </div>
          <div>
            <dt>Typical scope</dt>
            <dd>{selected.example}</dd>
          </div>
        </dl>
        <a
          className="button button-signal"
          href={buildProjectMailto(selected.label)}
        >
          Use this direction <span aria-hidden="true">↗</span>
        </a>
      </section>
    </div>
  );
}
