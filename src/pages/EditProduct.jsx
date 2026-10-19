import { useEffect, useState } from "react";

function EditProduct({ product, updateProduct, cancelEdit }) {
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const [category, setCategory] = useState(product.category);

  useEffect(() => {
    setName(product.name);
    setPrice(product.price);
    setCategory(product.category);
  }, [product]);

  function handleSubmit(e) {
    e.preventDefault();

    updateProduct({
      ...product,
      name: name,
      price: Number(price),
      category: category,
    });
  }

  return (
    <div className="max-w-lg mx-auto mb-10 bg-white p-8 rounded-2xl shadow-lg border border-indigo-100">
      <h2 className="text-2xl font-bold text-indigo-700 mb-6">
        ✏️ Edit Product
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block font-semibold mb-2 text-gray-700">
            Product Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div>
          <label className="block font-semibold mb-2 text-gray-700">
            Product Price
          </label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            min="0"
            required
            className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div>
          <label className="block font-semibold mb-2 text-gray-700">
            Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-indigo-400"
          >
            <option>Electronics</option>
            <option>Clothing</option>
            <option>Books</option>
            <option>Other</option>
          </select>
        </div>

        <div className="flex gap-3">
          <button
            type="submit"
            className="flex-1 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700"
          >
            Update Product
          </button>

          <button
            type="button"
            onClick={cancelEdit}
            className="flex-1 bg-gray-500 text-white py-3 rounded-lg font-semibold hover:bg-gray-600"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditProduct;