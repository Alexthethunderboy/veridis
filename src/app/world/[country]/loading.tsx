export default function CountryLoading() {
  return (
    <main className="page-shell animate-pulse">
      <div className="mb-7 h-4 w-28 rounded bg-brand-primary/10" />
      <div className="min-h-[500px] rounded-[2rem] border border-brand-primary/10 bg-brand-stone-100 p-10">
        <div className="h-3 w-40 rounded bg-brand-emerald-900/20" />
        <div className="mt-8 h-20 max-w-xl rounded bg-brand-primary/10" />
        <div className="mt-6 h-16 max-w-3xl rounded bg-brand-primary/[.06]" />
      </div>
      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        <div className="h-80 rounded-2xl bg-brand-stone-100" />
        <div className="h-80 rounded-2xl bg-brand-stone-100" />
      </div>
    </main>
  );
}
