import { supabase } from "./supabase";

export async function getCourses() {
  const { data, error } = await supabase
    .from("Courses")
    .select("*, User(*)")
    .order("id", {
      ascending: false,
    });

  if (error) {
    throw new Error(error?.message);
  }

  return data;
}
