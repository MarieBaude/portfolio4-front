import { JSX } from "solid-js";

export function parseFormattedText(text: string): JSX.Element {
  // Regex pour capturer **texte en gras**
  const parts = text.split(/(\*\*[^*]+\*\*)/g);

  return (
    <>
      {parts.map((part) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          // Enlève les ** et met en gras
          return <strong>{part.slice(2, -2)}</strong>;
        }
        return part;
      })}
    </>
  );
}