export default function Loading() {
  return (
    <div
      aria-busy="true"
      aria-label="Chargement du contenu"
      className="mx-auto min-h-[60vh] max-w-6xl px-5 py-16 sm:px-8"
      role="status"
    >
      <span className="sr-only">Chargement…</span>
      <div className="h-4 w-28 animate-pulse rounded bg-muted" />
      <div className="mt-5 h-10 max-w-xl animate-pulse rounded bg-muted sm:h-14" />
      <div className="mt-4 h-5 max-w-2xl animate-pulse rounded bg-muted" />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {["first", "second", "third"].map((item) => (
          <div className="overflow-hidden rounded-xl border border-border" key={item}>
            <div className="aspect-[16/10] animate-pulse bg-muted" />
            <div className="grid gap-3 p-5">
              <div className="h-5 w-2/3 animate-pulse rounded bg-muted" />
              <div className="h-4 animate-pulse rounded bg-muted" />
              <div className="h-4 w-4/5 animate-pulse rounded bg-muted" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
