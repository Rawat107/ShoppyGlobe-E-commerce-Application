import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useFetchProducts from "../hooks/useFetchProducts";
import { addToCart } from "../redux/cartSlice";
import { Link } from "react-router-dom"; 
import { NotificationContext } from '../App';
import { useContext } from 'react';

const ProductDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const showNotification = useContext(NotificationContext);

  

    const { data: product, error } = useFetchProducts(id);

    const handleAddToCart = () => {
        dispatch(addToCart(product));
        showNotification(product)
    };

    useEffect(() => {
        if (error) {
            navigate("/not-found");
        }
    }, [error, navigate]);

    
    if(!product) return null;

    return (
        <section className="max-w-4xl mx-auto p-4">
            <Link
                    to="/"
                    className="inline-flex items-center text-sm mb-4 text-[var(--accent-color)] hover:underline hover:text-[var(--primary-color)] transition"
                    >
                    ← Back to Home
            </Link>
            <div className="card-box p-4 shadow-md rounded-2xl bg-[var(--card-color)] hover:shadow-lg transition-all duration-300">
                <img 
                    src={product.thumbnail}
                    alt={product.title}
                    className="rounded-md w-full object-contain h-64" 
                />

                <div className="flex flex-col justify-between">
                    <div>
                        <h1 className="text-2xl font-bold mb-2 text-[var(--text-color)]">
                            {product.title}
                        </h1>
                        <p className="text-sm text-[var(--text-color)] mb-4">{product.description}</p>
                        <p className="text-lg font-bold text-[var(--accent-color)]">
                            ${product.price}
                        </p>
                    </div>

                    <button 
                        onClick={handleAddToCart}
                        className="mt-4 bg-[var(--accent-color)] text-white px-4 py-2 rounded shadow hover:brightness-110 transition-all duration-200 cursor-pointer"
                        >
                        Add to Cart
                    </button>


                </div>
                
            </div>
        </section>
    );
};

export default ProductDetail;
