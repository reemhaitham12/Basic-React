import ProfileCard from "./Components/ProfileCard";
import Alert from "./Components/Alert";
import Panel from "./Components/Panel";
import UserList from "./Components/UserList";
import ProductCatalog from "./Components/ProductCatalog";

function App() {
  const users = [
    { id: 1, name: "Active Account", isActive: true },
    { id: 2, name: "Guest Account", isActive: false },
    { id: 3, name: "Premium Account", isActive: true },
  ];

  const products = [
    { id: 1, name: "Laptop", category: "tech", inStock: true },
    { id: 2, name: "Phone", category: "tech", inStock: false },
    { id: 3, name: "Headphones", category: "tech", inStock: true },
    { id: 4, name: "Keyboard", category: "tech", inStock: true },
    { id: 5, name: "Mouse", category: "tech", inStock: false },
    { id: 6, name: "Monitor", category: "tech", inStock: true },
  ];

  return (
    <main className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="mx-auto max-w-6xl space-y-8">

        {/* Header */}
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h1 className="text-3xl font-bold text-gray-900">
            Dashboard Overview
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            A simple interface built with React and Tailwind CSS.
          </p>
        </div>

        {/* Profile + Alert */}
        <div className="grid gap-6 md:grid-cols-2">
          <ProfileCard
            name="Main Profile"
            age={22}
            role="Frontend Section"
            isOnline={true}
          />

          <Alert message="Something needs your attention." />
        </div>

        {/* Panel */}
        <Panel title="Quick Summary">
          <p className="text-gray-600">
            This section contains a short overview of the current content.
          </p>
        </Panel>

        {/* User + Products */}
        <div className="grid gap-6 md:grid-cols-2 items-start">

          {/* Users */}
          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <h2 className="mb-4 text-xl font-semibold text-gray-800">
              Account Status
            </h2>
            <UserList users={users} />
          </div>

          {/* Products */}
          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <h2 className="mb-4 text-xl font-semibold text-gray-800">
              Product Catalog
            </h2>
            <ProductCatalog products={products} category="tech" />
          </div>

        </div>
      </div>
    </main>
  );
}

export default App;