function Card({ children }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md">
      {children}
    </div>
  );
}

export default Card;