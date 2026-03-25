function ProductCatalog({ products, category }) {
  const filteredProducts = products.filter(
    (product) => product.category === category
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {filteredProducts.map((product) => (
        <div
          key={product.id}
          className={`rounded-2xl border p-4 shadow-sm transition hover:shadow-md ${
            product.inStock
              ? "border-gray-200 bg-white"
              : "border-red-200 bg-red-50"
          }`}
        >
         
          <img
            src={`https://picsum.photos/300/200?random=${product.id}`}
            alt={product.name}
            className="mb-3 h-40 w-full rounded-xl object-cover"
          />

          <h3 className="text-lg font-semibold text-gray-800">
            {product.name}
          </h3>

         
          <p
            className={`mt-1 text-sm font-medium ${
              product.inStock ? "text-green-600" : "text-red-600"
            }`}
          >
            {product.inStock ? "In Stock" : "Sold Out"}
          </p>

          {!product.inStock && (
            <span className="mt-2 inline-block text-xs font-semibold text-red-500">
              Out of Stock
            </span>
          )}

          
          <button className="mt-4 w-full rounded-lg bg-gray-900 py-2 text-sm text-white hover:bg-gray-800">
            View Product
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductCatalog;