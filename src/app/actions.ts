"use server";

import { revalidatePath } from "next/cache";
import { addTodo, toggleTodo, deleteTodo } from "@/lib/db";

export async function addTodoAction(formData: FormData): Promise<void> {
  const title = (formData.get("title") as string).trim();
  if (!title) return;
  addTodo(title);
  revalidatePath("/");
}

export async function toggleTodoAction(id: number): Promise<void> {
  toggleTodo(id);
  revalidatePath("/");
}

export async function deleteTodoAction(id: number): Promise<void> {
  deleteTodo(id);
  revalidatePath("/");
}
