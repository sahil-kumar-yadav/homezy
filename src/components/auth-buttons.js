"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { LogIn, LogOut, UserPlus } from "lucide-react";

export default function AuthButtons() {
  const { user, logout } = useAuth();
  const router = useRouter();

  if (!user) {
    return (
      <div className="flex gap-3">
        <button
          onClick={() => router.push("/login")}
          className="flex items-center gap-2 px-4 py-2 bg-white text-sky-900 rounded-lg font-semibold hover:bg-slate-200"
        >
          <LogIn className="w-4 h-4" />
          Login
        </button>
        <button
          onClick={() => router.push("/register")}
          className="flex items-center gap-2 px-4 py-2 bg-sky-500 text-white rounded-lg font-semibold hover:bg-sky-600"
        >
          <UserPlus className="w-4 h-4" />
          Register
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={logout}
      className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600"
    >
      <LogOut className="w-4 h-4" />
      Logout
    </button>
  );
}
