import { useState } from "react";
import ProductDisplay from "./pages/ProductDisplay";
import EditProduct from "./pages/EditProduct";

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: 50000, category: "Electronics" },
    { id: 2, name: "T-Shirt", price: 800, category: "Clothing" },
    { id: 3, name: "Book", price: 500, category: "Books" },
    { id: 4, name: "Headphones", price: 1500, category: "Electronics" },
    { id: 5, name: "Shoes", price: 2000, category: "Clothing" },
    { id: 6, name: "Notebook", price: 100, category: "Books" },
  ]);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [message, setMessage] = useState("");

  function selectProduct(product) {
    setSelectedProduct(product);
    setMessage("");
  }

  function updateProduct(updatedProduct) {
    setProducts(
      products.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );

    setSelectedProduct(null);
    setMessage("Product updated successfully!");
  }

  return (
    <div className="min-h-screen bg-indigo-50 p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-indigo-800">
            Product Management
          </h1>
          <p className="text-gray-600 mt-3">
            Select a product and update its information
          </p>
        </header>

        {message && (
          <div className="bg-green-100 text-green-800 p-4 rounded-lg text-center font-semibold mb-6">
            {message}
          </div>
        )}

        {selectedProduct && (
          <EditProduct
            key={selectedProduct.id}
            product={selectedProduct}
            updateProduct={updateProduct}
            cancelEdit={() => setSelectedProduct(null)}
          />
        )}

        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Available Products ({products.length})
        </h2>

        <ProductDisplay
          products={products}
          selectProduct={selectProduct}
        />
      </div>
    </div>
  );
}

export default App;