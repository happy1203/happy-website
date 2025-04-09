
export function Button({ children }) {
  return (
    <button className="flex items-center border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-100 transition">
      {children}
    </button>
  );
}
