export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      {/* Light */}
      <div
        className="absolute inset-0 dark:hidden"
        style={{
          backgroundColor: "#fafafa",
          backgroundImage: `
            radial-gradient(circle at 15% 10%, rgba(59,130,246,0.12), transparent 45%),
            radial-gradient(circle at 85% 90%, rgba(16,185,129,0.10), transparent 45%),
            linear-gradient(to right, rgba(0,0,0,0.035) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.035) 1px, transparent 1px)
          `,
          backgroundSize: "100% 100%, 100% 100%, 32px 32px, 32px 32px",
        }}
      />

      {/* Dark */}
      <div
        className="absolute inset-0 hidden dark:block"
        style={{
          backgroundColor: "#0b0b0b",
          backgroundImage: `
            radial-gradient(circle at 15% 10%, rgba(59,130,246,0.22), transparent 50%),
            radial-gradient(circle at 85% 90%, rgba(16,185,129,0.18), transparent 50%),
            linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "100% 100%, 100% 100%, 40px 40px, 40px 40px",
        }}
      />
    </div>
  );
}
