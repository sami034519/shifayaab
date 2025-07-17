import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity, clearCart } from "../redux/Cartslice";
import { Link } from "react-router-dom";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    address: ""
  });

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleQuantityChange = (id, quantity) => {
    if (quantity < 1) return;
    dispatch(updateQuantity({ id, quantity }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleOrderSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // ✅ Prepare payload matching API format
    const payload = {
      name: formData.name,
      email: formData.email,
      whatsapp: formData.whatsapp,
      address: formData.address,
      products: cartItems.map((item) => ({
        title: item.title,
        quantity: item.quantity,
        price: item.price,
        image: item.emailImage
          ? item.emailImage
          : item.image.startsWith("http")
          ? item.image
          : `https://shifayaab.vercel.app${item.image}`
      }))
    };

    console.log("Payload sent to API:", payload); // ✅ Debugging log

    try {
      const response = await fetch("https://shifayab-backend-jcd7.vercel.app/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        alert("✅ Order placed successfully!");
        dispatch(clearCart());
        setShowForm(false);
      } else {
        alert("❌ Failed to place order. Try again.");
      }
    } catch (error) {
      console.error("Order API Error:", error);
      alert("⚠️ Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-8 text-center">Your Cart</h2>

      {cartItems.length === 0 ? (
        <div className="text-center text-gray-600">
          <p>Your cart is empty.</p>
          <Link to="/allproducts" className="text-herbal underline mt-2 inline-block">
            Go shopping
          </Link>
        </div>
      ) : (
        <>
          {/* Cart Items */}
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row items-center gap-6 border-b pb-4"
              >
                <Link to={`/product/${item.id}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-32 h-32 object-contain hover:scale-105 transition-transform"
                  />
                </Link>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-gray-500">Rs. {item.price.toLocaleString()}</p>
                  <div className="flex items-center mt-2 space-x-3">
                    <label className="text-sm">Qty:</label>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(item.id, Number(e.target.value))}
                      className="w-16 px-2 py-1 border rounded"
                    />
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            {/* Cart Total & Checkout */}
            <div className="text-right mt-6">
              <p className="text-lg font-semibold">Subtotal: Rs. {total.toLocaleString()}</p>
              <div className="flex gap-4 justify-end mt-4">
                <button
                  onClick={() => dispatch(clearCart())}
                  className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
                >
                  Clear Cart
                </button>
                <button
                  onClick={() => setShowForm(true)}
                  className="bg-herbal text-white px-6 py-2 rounded hover:bg-green-700"
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>

          {/* Order Form Modal */}
          {showForm && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
                <h3 className="text-xl font-bold mb-4">Complete Your Order</h3>
                <form onSubmit={handleOrderSubmit} className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full border p-2 rounded"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full border p-2 rounded"
                    required
                  />
                  <input
                    type="text"
                    name="whatsapp"
                    placeholder="WhatsApp Number"
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    className="w-full border p-2 rounded"
                    required
                  />
                  <textarea
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full border p-2 rounded"
                    required
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-herbal text-white w-full py-2 rounded hover:bg-green-700"
                  >
                    {loading ? "Placing Order..." : "Place Order"}
                  </button>
                </form>
                <button
                  onClick={() => setShowForm(false)}
                  className="mt-4 text-red-500 underline block text-center"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CartPage;
