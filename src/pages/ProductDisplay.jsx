function ProductDisplay({ products, selectProduct }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white p-6 rounded-2xl shadow-md border border-indigo-100 hover:shadow-xl hover:-translate-y-1 transition duration-300"
        >
          <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-2xl mb-4">
            📦
          </div>

          <h2 className="text-xl font-bold text-indigo-700">
            {product.name}
          </h2>

          <p className="text-gray-500 mt-2">
            Category: {product.category}
          </p>

          <p className="text-2xl font-bold text-gray-800 mt-3">
            ₹{product.price}
          </p>

          <button
            onClick={() => selectProduct(product)}
            className="mt-5 w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Edit Product
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductDisplay;