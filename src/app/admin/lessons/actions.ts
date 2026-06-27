"use server";

import { revalidatePath } from "next/cache";
import { supabaseAdmin } from "@/lib/supabase/admin";
import { isAdmin } from "@/lib/auth";

// Every action re-checks admin status — never trust the UI alone.
async function assertAdmin() {
  if (!(await isAdmin())) throw new Error("Unauthorized");
}

export async function createLesson(formData: FormData) {
  await assertAdmin();
  await supabaseAdmin.from("lessons").insert({
    name: formData.get("name") as string,
    description: (formData.get("description") as string) || null,
    base_price: Number(formData.get("base_price")) || 0,
    age_group: (formData.get("age_group") as string) || "all",
    duration_minutes: Number(formData.get("duration_minutes")) || 60,
    is_popular: formData.get("is_popular") === "on",
    is_published: formData.get("is_published") === "on",
    sort_order: Number(formData.get("sort_order")) || 0,
  });
  revalidatePath("/admin/lessons");
  revalidatePath("/");
}

export async function updateLesson(formData: FormData) {
  await assertAdmin();
  const id = formData.get("id") as string;
  await supabaseAdmin
    .from("lessons")
    .update({
      name: formData.get("name") as string,
      description: (formData.get("description") as string) || null,
      base_price: Number(formData.get("base_price")) || 0,
      age_group: (formData.get("age_group") as string) || "all",
      duration_minutes: Number(formData.get("duration_minutes")) || 60,
      is_popular: formData.get("is_popular") === "on",
      is_published: formData.get("is_published") === "on",
      sort_order: Number(formData.get("sort_order")) || 0,
    })
    .eq("id", id);
  revalidatePath("/admin/lessons");
  revalidatePath("/");
}

export async function deleteLesson(formData: FormData) {
  await assertAdmin();
  const id = formData.get("id") as string;
  await supabaseAdmin.from("lessons").delete().eq("id", id);
  revalidatePath("/admin/lessons");
  revalidatePath("/");
}