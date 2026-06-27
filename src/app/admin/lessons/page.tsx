import { supabaseAdmin } from "@/lib/supabase/admin";
import LessonForm from "./LessonForm";
import { deleteLesson } from "./actions";
import type { Lesson } from "@/lib/data/lessons";

export default async function AdminLessonsPage() {
  // Admin sees ALL lessons (published or not), so we use the admin client.
  const { data } = await supabaseAdmin
    .from("lessons")
    .select("*")
    .order("sort_order", { ascending: true });
  const lessons = (data ?? []) as Lesson[];

  return (
    <div>
      <h1 className="mb-6 font-serif text-3xl font-medium">Manage lessons</h1>

      <div className="mb-10 space-y-4">
        {lessons.map((lesson) => (
          <div key={lesson.id} className="space-y-2">
            <LessonForm lesson={lesson} />
            <form action={deleteLesson} className="flex justify-end">
              <input type="hidden" name="id" value={lesson.id} />
              <button className="font-sans text-[12px] text-red-600 hover:underline">
                Delete this lesson
              </button>
            </form>
          </div>
        ))}
      </div>

      <h2 className="mb-3 font-serif text-2xl font-medium">Add a new lesson</h2>
      <LessonForm />
    </div>
  );
}