import React from 'react';

const Cart = ({ cart }) => {
    console.log(cart);
    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    const handleBuyNow = () => {
        console.log('Items purchased')
    };

    return (
        <div className="container mx-auto p-4 bg-gray-100 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Your Cart</h2>
            {cart.length === 0 ? (
                <p className="text-gray-500">Your cart is empty.</p>
            ) : (
                <ul className="space-y-4">
                    {cart.map((item, index) => (
                        <li key={index} className="flex justify-between items-center bg-white p-4 rounded-lg shadow">
                            <div className="flex flex-col">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-16 h-16 rounded-md object-cover mr-4"
                                />
                                <span className="font-medium text-lg">{item.name}</span>
                                <span className="text-sm text-gray-500">Quantity: {item.quantity}</span>
                                <span className="text-sm text-gray-500">Price: ${item.price}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
            {cart.length > 0 && (
                <div className="mt-6">
                    <h3 className="text-lg font-semibold">Total: ${calculateTotal()}</h3>
                    <button
                        className="mt-4 w-full bg-indigo-700 text-white py-2 px-4 rounded-lg hover:bg-indigo-800 transition duration-200"
                        onClick={handleBuyNow}
                    >
                        Buy Now
                    </button>
                </div>
            )}
        </div>
    );
};

export default Cart;