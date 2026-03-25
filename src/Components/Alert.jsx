import Card from "./Card";

function Alert({ message }) {
  return (
    <Card>
      <div className="rounded-xl border border-red-200 bg-red-50 p-4 shadow-sm">
        <h3 className="mb-2 text-lg font-semibold text-red-600">
          ⚠️ Alert!
        </h3>
        <p className="text-sm text-red-700">
          {message}
        </p>
      </div>
    </Card>
  );
}

export default Alert;