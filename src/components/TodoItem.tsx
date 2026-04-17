"use client";

import { toggleTodoAction, deleteTodoAction } from "@/app/actions";
import type { Todo } from "@/lib/db";

export default function TodoItem({ todo }: { todo: Todo }) {
  return (
    <li className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200">
      <form action={() => toggleTodoAction(todo.id)}>
        <button
          type="submit"
          className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
            todo.completed
              ? "bg-blue-600 border-blue-600 text-white"
              : "border-gray-400 hover:border-blue-400"
          }`}
          aria-label="完了トグル"
        >
          {todo.completed && (
            <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12">
              <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </button>
      </form>
      <span className={`flex-1 ${todo.completed ? "line-through text-gray-400" : "text-gray-800"}`}>
        {todo.title}
      </span>
      <form action={() => deleteTodoAction(todo.id)}>
        <button
          type="submit"
          className="text-gray-400 hover:text-red-500 transition-colors"
          aria-label="削除"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
            <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </form>
    </li>
  );
}
