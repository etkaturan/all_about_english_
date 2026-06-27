import { redirect } from "next/navigation";
import Link from "next/link";
import { isAdmin } from "@/lib/auth";
import { logout } from "./actions";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // GUARD: non-admins never see admin content.
  if (!(await isAdmin())) {
    redirect("/login");
  }

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-8">
      <header className="mb-8 flex items-center justify-between border-b border-[var(--border)] pb-5">
        <div className="flex items-center gap-6">
          <span className="font-serif text-xl">Admin</span>
          <nav className="flex gap-4 font-sans text-[13px] text-muted">
            <Link href="/admin">Dashboard</Link>
            <Link href="/admin/lessons">Lessons</Link>
          </nav>
        </div>
        <form action={logout}>
          <button className="rounded-full border border-[var(--border)] px-4 py-2 font-sans text-[13px]">
            Sign out
          </button>
        </form>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  );
}