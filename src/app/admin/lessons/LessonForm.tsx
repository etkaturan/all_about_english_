import type { Lesson } from "@/lib/data/lessons";
import { createLesson, updateLesson } from "./actions";

export default function LessonForm({ lesson }: { lesson?: Lesson }) {
  const isEdit = !!lesson;

  return (
    <form
      action={isEdit ? updateLesson : createLesson}
      className="grid gap-3 rounded-2xl border border-[var(--border)] p-5"
      style={{ background: "var(--card)" }}
    >
      {isEdit && <input type="hidden" name="id" value={lesson.id} />}

      <div className="grid gap-3 sm:grid-cols-2">
        <Field name="name" label="Name" defaultValue={lesson?.name} required />
        <Field name="base_price" label="Price (€)" type="number" defaultValue={lesson?.base_price} />
        <Field name="age_group" label="Age group" defaultValue={lesson?.age_group ?? "all"} />
        <Field name="duration_minutes" label="Duration (min)" type="number" defaultValue={lesson?.duration_minutes ?? 60} />
        <Field name="sort_order" label="Sort order" type="number" defaultValue={lesson?.sort_order ?? 0} />
      </div>

      <label className="font-sans text-[12px] text-muted">Description</label>
      <textarea
        name="description"
        defaultValue={lesson?.description ?? ""}
        rows={2}
        className="rounded-xl border border-[var(--border)] bg-transparent px-3 py-2 font-sans text-sm outline-none focus:border-royal"
      />

      <div className="flex gap-5 font-sans text-[13px]">
        <label className="flex items-center gap-2">
          <input type="checkbox" name="is_popular" defaultChecked={lesson?.is_popular ?? false} />
          Popular
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="is_published"
            defaultChecked={Boolean((lesson as any)?.is_published ?? true)}
          />
          Published
        </label>
      </div>

      <button className="mt-1 w-fit rounded-full bg-royal px-6 py-2.5 font-sans text-sm font-medium text-white">
        {isEdit ? "Save changes" : "Add lesson"}
      </button>
    </form>
  );
}

function Field({
  name,
  label,
  defaultValue,
  type = "text",
  required = false,
}: {
  name: string;
  label: string;
  defaultValue?: string | number | null;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="font-sans text-[12px] text-muted">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        defaultValue={defaultValue ?? ""}
        className="rounded-xl border border-[var(--border)] bg-transparent px-3 py-2 font-sans text-sm outline-none focus:border-royal"
      />
    </div>
  );
}