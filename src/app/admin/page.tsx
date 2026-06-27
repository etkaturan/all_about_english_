import Link from "next/link";

export default function AdminDashboard() {
  return (
    <div>
      <h1 className="mb-2 font-serif text-3xl font-medium">Welcome back</h1>
      <p className="mb-8 font-sans text-muted">Manage your site content from here.</p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Link
          href="/admin/lessons"
          className="rounded-2xl border border-[var(--border)] p-6 transition-transform hover:-translate-y-1"
          style={{ background: "var(--card)" }}
        >
          <div className="font-serif text-xl">Lessons</div>
          <div className="mt-1 font-sans text-[13px] text-muted">
            Edit pricing tiers shown on the site
          </div>
        </Link>
        <div
          className="rounded-2xl border border-dashed border-[var(--border)] p-6 opacity-60"
        >
          <div className="font-serif text-xl">Books</div>
          <div className="mt-1 font-sans text-[13px] text-muted">Coming next</div>
        </div>
        <div
          className="rounded-2xl border border-dashed border-[var(--border)] p-6 opacity-60"
        >
          <div className="font-serif text-xl">Purchases</div>
          <div className="mt-1 font-sans text-[13px] text-muted">Coming next</div>
        </div>
      </div>
    </div>
  );
}