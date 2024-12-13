import { Link } from 'react-router-dom';
import Product1 from '../product-img-1.png';
import Product2 from '../product-img-2.png';
import Product3 from '../product-img-3.png';
import Product4 from '../product-img-4.png';
import Product5 from '../product-img-5.png';
import Product6 from '../product-img-6.png';
import Product8 from '../product-img-7.png';
import Product7 from '../product-img-8.png';

const ProductGrid = ({products}) => {

    // const products = [
    //     {id:1, product:Product1, name:"Urban Drift Bucket", price:"$15"},
    //     {id:2, product:Product2, name:"Tangerine Mini Tote", price:"$150"},
    //     {id:3, product:Product3, name:"Elemental Sneakers", price:"$80"},
    //     {id:4, product:Product4, name:"Metro Hoodie", price:"$81"},
    //     {id:5, product:Product5, name:"Sunbeam Mules", price:"$68"},
    //     {id:6, product:Product6, name:"Azure Attitude Shades", price:"$45"},
    //     {id:7, product:Product7, name:"Voyager Hoodie", price:"$76"},
    //     {id:8, product:Product8, name:"LA Baseball Hat", price:"$20"}
    // ]

    return (
        // Global Container
        <div className="flex items-center justify-center min-h-screen">

            {/* Card Container */}
            <div className="flex flex-col p-16 m-2 space-y-10 bg-white rounded-2xl
                            shadow-2xl">
                
                <div className="flex flex-col jusitfy between space-y-5 md:flex-row lg:flex-row">
                    <h1 className="text-2xl font-medium mb-6">Latest Arrivals</h1>
                </div>
                


                {/* Grid Container */}
                <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4 justify-items-center">
                    {products.map(item => (
                        <Link to={`/product-details/${item.id}`} key={item.id}>
                            <div className="relative group">
                                <img src={item.image} alt={item.name} class="w-72 rounded-xl transition-transform duration-300 transform group-hover:scale-105"/>
                                <div className=" font-sans text-neutral-900">
                                    <div className="p-3 hover:text-indigo-600">
                                        <p className="text-base">{item.name}</p>
                                    </div>
                                    <div className="px-3">
                                        <p className="text-base">${item.price}</p>
                                    </div>
                                </div>
                            </div>
                            
                        </Link>
                    ))}

                </div>
            </div>

        </div>
    )
};

export default ProductGrid;