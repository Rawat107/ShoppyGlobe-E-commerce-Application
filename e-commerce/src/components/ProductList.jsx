import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../redux/searchSlice";
import useFetchProducts from "../hooks/useFetchProducts";
import ProductItem from './ProductItem';
import { useEffect } from "react";


const ProductList = () => {
    const dispatch = useDispatch();
    const { data: products = [], error } = useFetchProducts();
    const searchQuery = useSelector((state) => state.search.query || '');
    
    // Memoize or optimize filtering for larger lists
    const filteredProducts = products.filter((product) => 
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    //  Clear search on unmount
    useEffect(() => {
        return () => dispatch(setSearchQuery(""));
    }, [dispatch]);

    return (
        <section className="p-4 max-w-6xl mx-auto">
            <input 
                type="text"
                placeholder="Search products....."
                value={searchQuery}
                onChange={(e) => dispatch(setSearchQuery(e.target.value))}
                className="w-full p-2 mb-4 border rounded text-[var(--text-color)] bg-white placeholder:text-[var(--subtext-color)]"
                aria-label="Search products"
            />
            
            {error && (
                <p className="text-[var(--error-color)] text-center py-8">
                    Error: {error}. Please try again later.
                </p>
            )}

            {!error && (
                <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {filteredProducts.map((product) => (
                            <ProductItem key={product.id} product={product} />
                        ))}
                    </div>

                    {filteredProducts.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-[var(--subtext-color)] text-xl mb-2">
                                No products found
                            </p>
                            <p className="text-[var(--subtext-color)]">
                                Try adjusting your search terms
                            </p>
                        </div>
                    )}
                </>
            )}
        </section>
    )
}

export default ProductList;