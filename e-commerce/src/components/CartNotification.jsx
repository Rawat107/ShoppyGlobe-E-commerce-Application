import { Link } from "react-router-dom";
import { X } from 'lucide-react';


const CartNotification = ({ item, onClose }) => {
    return (
        <section className="fixed bottom-4 right-4 bg-white border border-gray-200 shadow-lg rounded p-4 flex items-center gap-4 animate-slide-in z-50">
            <img 
                src={item.thumbnail} 
                alt={item.title}
                className="w-12 h-12 object-contain rounded" 
            />
            <div className="flex-1">
                <p className="text-[var(--text-color)] font-semibold text-sm">
                    Item added to cart
                </p>
                <p className="text-xs text-[var(--subtext-color)]">{item.title}</p>
                    <Link
                        to="/cart"
                        className="text-[var(--accent-color)] text-sm underline mt-1 inline-block cursor-pointer"
                        onClick={onClose}
                    >
                        View Cart
                    </Link>
            </div>
             <button onClick={onClose} className="text-xs text-[var(--text-color)] hover:text-red-500 cursor-pointer">
                 <X size={16} />
            </button>
        </section>
    )
}


export default CartNotification;