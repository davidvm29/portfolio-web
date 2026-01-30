export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      {/* Base */}
      <div className="absolute inset-0 bg-[#fafafa]" />

      {/* Grid sutil */}
      <div
        className="absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* “Blobs” suaves */}
      <div className="absolute -top-24 left-[-120px] h-[420px] w-[420px] rounded-full bg-neutral-200/60 blur-3xl" />
      <div className="absolute top-40 right-[-140px] h-[460px] w-[460px] rounded-full bg-neutral-300/60 blur-3xl" />
    </div>
  );
}
