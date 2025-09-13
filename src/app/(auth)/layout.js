// src/app/(auth)/layout.js
export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow">
        {children}
      </div>
    </div>
  );
}
