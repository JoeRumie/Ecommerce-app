import Product1 from '../product-img-1.png';
import Product2 from '../product-img-2.png';
import Product3 from '../product-img-3.png';
import Product4 from '../product-img-4.png';
import Product5 from '../product-img-5.png';
import Product6 from '../product-img-6.png';
import Product7 from '../product-img-7.png';
import Product8 from '../product-img-8.png';

const ProductGrid = () => {
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
                <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4 ">

                    {/* Image 1 */}
                    <div className="relative group">
                        <img src={Product1} alt="" class="w-72 rounded-xl transition-transform duration-300 transform group-hover:scale-105"/>
                        <div className=" font-sans text-neutral-900">
                            <div className="p-3 hover:text-indigo-600">
                                <p className="text-base">Urban Drift Bucket Hat</p>
                            </div>
                            <div className="px-3">
                                <p className="text-base">$15</p>
                            </div>
                        </div>
                    </div>

                    {/* Image 2 */}
                    <div className="relative group">
                        <img src={Product2} alt="" class="w-72 rounded-xl transition-transform duration-300 transform group-hover:scale-105"/>
                        <div className=" font-sans text-neutral-900">
                            <div className="p-3 hover:text-indigo-600">
                                <p className="text-base">Tangerine Mini Tote</p>
                            </div>
                            <div className="px-3">
                                <p className="text-base">$150</p>
                            </div>
                        </div>
                    </div>


                    {/* Image 3 */}
                    <div className="relative group">
                        <img src={Product3} alt="" class="w-72 rounded-xl transition-transform duration-300 transform group-hover:scale-105"/>
                        <div className=" font-sans text-neutral-900">
                            <div className="p-3 hover:text-indigo-600">
                                <p className="text-base">Elemental Sneakers</p>
                            </div>
                            <div className="px-3">
                                <p className="text-base">$80</p>
                            </div>
                        </div>
                    </div>


                    {/* Image 4 */}
                    <div className="relative group">
                        <img src={Product4} alt="" class="w-72 rounded-xl transition-transform duration-300 transform group-hover:scale-105"/>
                        <div className=" font-sans text-neutral-900">
                            <div className="p-3 hover:text-indigo-600">
                                <p className="text-base">Metro Hoodie</p>
                            </div>
                            <div className="px-3">
                                <p className="text-base">$81</p>
                            </div>
                        </div>
                    </div>


                    {/* Image 5 */}
                    <div className="relative group">
                        <img src={Product5} alt="" class="w-72 rounded-xl transition-transform duration-300 transform group-hover:scale-105"/>
                        <div className=" font-sans text-neutral-900">
                            <div className="p-3 hover:text-indigo-600">
                                <p className="text-base">Sunbeam Mules</p>
                            </div>
                            <div className="px-3">
                                <p className="text-base">$68</p>
                            </div>
                        </div>
                    </div>

                    {/* Image 6 */}
                    <div className="relative group">
                        <img src={Product6} alt="" class="w-72 rounded-xl transition-transform duration-300 transform group-hover:scale-105"/>
                        <div className=" font-sans text-neutral-900">
                            <div className="p-3 hover:text-indigo-600">
                                <p className="text-base">Azure Attitude Shades</p>
                            </div>
                            <div className="px-3">
                                <p className="text-base">$45</p>
                            </div>
                        </div>
                    </div>


                    {/* Image 7 */}
                    <div className="relative group">
                        <img src={Product8} alt="" class="w-72 rounded-xl transition-transform duration-300 transform group-hover:scale-105"/>
                        <div className=" font-sans text-neutral-900">
                            <div className="p-3 hover:text-indigo-600">
                                <p className="text-base">Voyager Hoodie</p>
                            </div>
                            <div className="px-3">
                                <p className="text-base">$76</p>
                            </div>
                        </div>
                    </div>


                    {/* Image 8 */}
                    <div className="relative group">
                        <img src={Product7} alt="" class="w-72 rounded-xl transition-transform duration-300 transform group-hover:scale-105"/>
                        <div className=" font-sans text-neutral-900">
                            <div className="p-3 hover:text-indigo-600">
                                <p className="text-base">La Baseball Hat</p>
                            </div>
                            <div className="px-3">
                                <p className="text-base">$20</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
};

export default ProductGrid;