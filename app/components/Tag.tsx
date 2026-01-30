export function Tag({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center rounded-full border px-2 py-1 text-xs">
      {text}
    </span>
  );
}
