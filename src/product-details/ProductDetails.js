import Product from '../product-img-main.png';
import { useState } from 'react';
import Arrow from '../icon-arrow.svg';

const ProductDetails = () => {
    const [quantity, setQuantity] = useState(0);
    const [selectedSize, setSelectedSize] = useState(null);

    const incrementClick = () => {
        setQuantity(quantity + 1);
    };

    const decrementQuantity = () => {
        if(quantity > 1){
            setQuantity(quantity - 1)
        }
    }

    const handleSizeClick = (size) => {
        setSelectedSize(size);
    };

    return (
        // Global Container
        <div className="flex items-center justify-center min-h-screen ">

            {/* Card Container */}
            <div className="flex flex-col p-16 m-2 space-y-10 bg-white rounded-2xl
                            shadow-2xl md:flex-row md:space-y-0 md:space-x-20 md:m-4 md:p-12"
            >
                
                {/* Image Div Container */}
                <div>
                    <img 
                        className=" hover:scale-105 duration-200 w-full rounded-xl" 
                        src={Product} 
                        alt=""/>
                </div>

                {/* Content */}
                <div className="flex flex-col space-y-0">

                    {/* Label and Description Container */}
                    <div className="flex flex-col mb-4 space-y-3 text-left md:text-left ">
                        <div>
                            <div className="justify-center md:justify-start text-neutral-900 text-4xl font-semibold font-sans">
                                Voyager Hoodie
                            </div>
                        </div>

                        {/* Pricing Info */}
                        <div className="flex flex-row space-x-3 justify-start md:justify-start font-sans">
                            <div className="text-3xl text-neutral-600">$76</div>
                            <div className="line-through py-2 text-neutral-400">$95</div>
                        
                        </div>

                    
                        {/* Description */}
                        <div className="max-w-sm text-sm font-sans font-thin text-neutral-600">
                            The Voyager Hoodie is for the explorer at heart. Its durable
                            fabric and roomy pockets are perfect for those who are always 
                            searching for the next adventure.
                        </div>

                        <div className="justify-start pt-6 font-sans text-xs text-neutral-600">Available Sizes</div>

                        {/* Available Sizes */}
                        <div className="flex flex-row justify-start md:justify-start space-x-4">
                            {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                                <button
                                    key={size}
                                    onClick={() => handleSizeClick(size)}
                                    className={`w-14 h-10 border-2 rounded-lg ${
                                        size === selectedSize? 'border-indigo-600': ''
                                     }`}
                                >

                                    {size}
                                </button>
                            ))}
                        </div>

                        <div className="justify-start pt-6 font-sans text-xs text-neutral-600">Quantity</div>

                        {/* Quantity Field */}
                        <div className="flex items-center pb-6">
                            <button onClick={decrementQuantity} className="w-10 h-10 border-2 hover:shadow-lg rounded-s-lg">-</button>
                            <input 
                                type="number" 
                                value={quantity}
                                readOnly
                                className="w-14 h-10 text-center border-y-2"
                            
                            />
                            <button onClick={incrementClick} className="w-10 h-10 border-2 hover:shadow-lg rounded-e-lg">+</button>
                        </div>

                        {/* Button Group */}
                        <div className="group">
                            <button className="w-full h-9 bg-indigo-700 text-white rounded-xl group-hover:scale-105 duration-100">
                                Add to cart
                            </button>

                        </div>

                        {/* FAQ Accordion*/}
                        <section id="faq-accordion">

                            {/* Main Container */}
                            {/* <div className="container mx-auto px-6 mb-32"> */}

                                {/* Accordion Container */}
                                <div className="w-full m-8 mx-auto overflow-hidden">

                                    {/* Tab */}
                                    <div className="py-1 border-b outline-none group" tabIndex="1">

                                        {/* Tab flex container */}
                                        <div className="flex items-center justify-between py-3 text-gray-500
                                                        transition duration-500 cursor-pointer group ease"
                                        >

                                            {/* Tab Title */}
                                            <div className="transition duration-500 text-neutral-800 ease group-hover:text-indigo-600">
                                                Features
                                            </div>

                                            {/* Arrow */}
                                            <div className="transition duration-500 ease group-focus:-rotate-180 group-focus:text-indigo-600">
                                                <img src={Arrow}/>
                                            </div>

                                        </div>

                                        {/* Inner Content */}
                                        <div className="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease">
                                            <p className="text-neutral-600 px-4">- Designed for comfort and breathability</p>
                                            <p className="text-neutral-600 px-4">- Large front pocket and adjustable hood</p>
                                        </div>




                                    </div>

                                    <div className="py-1 border-b outline-none group" tabIndex="1">

                                        {/* Tab flex container */}
                                        <div className="flex items-center justify-between py-3 text-gray-500
                                                        transition duration-500 cursor-pointer group ease"
                                        >

                                            {/* Tab Title */}
                                            <div className="transition duration-500 text-neutral-800 ease group-hover:text-indigo-600">
                                                Fabric & Care
                                            </div>

                                            {/* Arrow */}
                                            <div className="transition duration-500 ease group-focus:-rotate-180 group-focus:text-indigo-600">
                                                <img src={Arrow}/>
                                            </div>

                                        </div>

                                        {/* Inner Content */}
                                        <div className="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease">
                                            <p className="text-neutral-600 px-4">- Designed for comfort and breathability</p>
                                            <p className="text-neutral-600 px-4">- Large front pocket and adjustable hood</p>
                                        </div>

                                    </div>


                                </div>

                            {/* </div> */}
                        </section>


                    </div>

                </div>


            </div>


        </div>

    );
};
export default ProductDetails