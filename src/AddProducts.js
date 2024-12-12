import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const ProductUploader = ({products, setProducts}) => {
    const [imagePreview, setImagePreview] = useState(null); // Image preview
    const [uploadedImage, setUploadedImage] = useState(null); // Raw image file
    const [productName, setProductName] = useState(""); // Product name
    const [productDescription, setProductDescription] = useState("");
    const [productPrice, setProductPrice] = useState("");


    // Load products from localStorage on component mount
    useEffect(() => {
        const savedProducts = localStorage.getItem("products");
        if (savedProducts) {
            setProducts(JSON.parse(savedProducts));
        }
    }, []);

    // Save products to localStorage whenever the products array changes
    useEffect(() => {
        localStorage.setItem("products", JSON.stringify(products));
        if (setProducts) {
            setProducts(products); // Pass updated products to parent or other components
        }
    }, [products, setProducts]);


    const handleImageChange = (event) => {
        const file = event.target.files[0]; // Get the selected file

        if (file) {
            // Validate file type
            if (!file.type.startsWith("image/")) {
                alert("Please select a valid image file.");
                return;
            }

            setUploadedImage(file); // Save the file to state

            // Generate a preview using FileReader
            const reader = new FileReader();
            reader.onload = (e) => {
                setImagePreview(e.target.result); // Save the data URL for preview
            };
            reader.readAsDataURL(file);
        }
    };

    const handleAddProduct = () => {
        if (!productName || !uploadedImage) {
            alert("Please provide a product name and upload an image.");
            return;
        }

        const newProduct = {
            id: uuidv4(), // Unique ID for the product
            name: productName,
            price: productPrice,
            description: productDescription,
            image: imagePreview, // Use the image preview (base64 data URL)
        };

        console.log(newProduct);

        setProducts([...products, newProduct]); // Add the new product to the array
        setProductName(""); // Clear the product name input
        setImagePreview(null); // Clear the image preview
        setUploadedImage(null); // Clear the raw image file
        setProductPrice("");
        setProductDescription("");
    };

    return (
        <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Add New Product</h2>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Enter product name"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="mb-4">
                <input
                    type="number"
                    placeholder="Enter product price"
                    value={productPrice}
                    onChange={(e) => setProductPrice(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="mb-4">
                <textarea
                    placeholder="Enter product description"
                    value={productDescription}
                    onChange={(e) => setProductDescription(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="4"
                ></textarea>
            </div>
            <div className="mb-4">
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
            </div>
            {imagePreview && (
                <div className="mb-4">
                    <h3 className="text-lg font-medium text-gray-700">Preview:</h3>
                    <img
                        src={imagePreview}
                        alt="Uploaded Preview"
                        className="max-w-full h-auto mt-2 rounded-md border border-gray-300"
                    />
                </div>
            )}
            <button
                onClick={handleAddProduct}
                className="w-full py-2 px-4 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 transition"
            >
                Add Product
            </button>

            {products.length > 0 && (
                <div className="mt-6">
                    <h3 className="text-lg font-semibold text-gray-800">Added Products</h3>
                    <ul className="mt-4 space-y-4">
                        {products.map((product) => (
                            <li
                                key={product.id}
                                className="p-4 border border-gray-300 rounded-lg shadow-sm flex items-center"
                            >
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-16 h-16 rounded-md object-cover mr-4"
                                />
                                <span className="font-medium text-gray-700">{product.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default ProductUploader;