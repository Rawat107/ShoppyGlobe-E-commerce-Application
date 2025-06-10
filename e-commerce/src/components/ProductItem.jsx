import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { NotificationContext } from '../App';
import { useContext } from 'react';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const showNotification = useContext(NotificationContext);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    showNotification(product)
  };

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 p-4 flex flex-col">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="rounded-xl h-40 w-full object-contain mb-3"
      />
      <h3 className="font-semibold text-lg text-[var(--text-color)] mb-1">
        {product.title}
      </h3>
      <p className="text-sm text-[var(--subtext-color)] mb-2 capitalize">
        {product.category}
      </p>
      <p className="text-[var(--primary-color)] font-bold text-base mb-3">
        ${product.price}
      </p>

      <div className="mt-auto flex justify-between items-center">
        <Link
          to={`/product/${product.id}`}
          className="text-sm text-[var(--accent-color)] underline"
        >
          View Details
        </Link>
        <button
            onClick={handleAddToCart}
            className="bg-[var(--accent-color)] text-white px-4 py-2 rounded shadow hover:brightness-110 transition-all duration-200 cursor-pointer"
          >
            Add to Cart
        </button>

      </div>
    </div>
  );
};

export default ProductItem;
