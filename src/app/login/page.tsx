import { login } from "./actions";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  return (
    <div className="flex min-h-[80vh] items-center justify-center px-6">
      <div
        className="w-full max-w-sm rounded-3xl border border-[var(--border)] p-8"
        style={{ background: "var(--card)" }}
      >
        <p className="mb-1 font-sans text-[11px] tracking-[3px] text-royal">ADMIN</p>
        <h1 className="mb-6 font-serif text-3xl font-medium">Sign in</h1>

        {error && (
          <p className="mb-4 rounded-xl border border-red-300 bg-red-50 px-4 py-3 font-sans text-[13px] text-red-700">
            {error}
          </p>
        )}

        <form action={login} className="flex flex-col gap-4">
          <input
            name="email"
            type="email"
            required
            placeholder="Email"
            className="rounded-xl border border-[var(--border)] bg-transparent px-4 py-3 font-sans text-sm outline-none focus:border-royal"
          />
          <input
            name="password"
            type="password"
            required
            placeholder="Password"
            className="rounded-xl border border-[var(--border)] bg-transparent px-4 py-3 font-sans text-sm outline-none focus:border-royal"
          />
          <button
            type="submit"
            className="mt-2 rounded-full bg-royal px-6 py-3 font-sans text-sm font-medium text-white"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}