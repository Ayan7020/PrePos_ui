export default function Home() {
  return (
    <div className="bg-background min-h-screen p-6">
      <button
        className="
    group relative overflow-hidden
    border border-black
    py-2 px-4 rounded-md
    text-foreground
  "
      >
        <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
          Login
        </span>

        <span
          className="
      absolute inset-0
      bg-black
      origin-bottom
      scale-y-0
      transition-transform duration-300
      group-hover:scale-y-100
    "
        />
      </button>
    </div>
  );
}
