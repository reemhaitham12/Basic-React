import Card from "./Card";

function Panel({ title, children }) {
  return (
    <Card>
      <div className="space-y-3">
        <h3 className="border-b pb-2 text-lg font-semibold text-gray-800">
          {title}
        </h3>
        <div className="text-sm text-gray-600">
          {children}
        </div>
      </div>
    </Card>
  );
}

export default Panel;