export function Tag({ text }: { text: string }) {
  return (
    <span
      className="
        inline-flex items-center rounded-full border px-2.5 py-1 text-xs
        border-neutral-200 bg-neutral-50 text-neutral-700
        dark:border-white/10 dark:bg-white/5 dark:text-neutral-200
      "
    >
      {text}
    </span>
  );
}
