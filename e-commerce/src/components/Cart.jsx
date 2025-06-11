import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    // Get all items from the Redux cart state
    const CartItems = useSelector((state) => state.cart)

    // Calculate the total price of all items
    const total = CartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)


    const navigate = useNavigate()

    // Navigate to checkout page
    const handleProceedToPayment = () => {
        navigate("/checkout");
    }


return (
    <section className="max-w-4xl mx-auto p-4">
        

        {CartItems.length === 0 ? (
            <div className="flex items-center justify-center h-[60vh]">
                <p className="text-2xl sm:text-3xl font-semibold text-[var(--subtext-color)] text-center">
                Your cart is empty 🛒
                </p>
            </div>
        ) : (
            <>
                <h2 className="text-2xl font-bold mb-4 text-[var(--text-color)]">
                    Your Cart
                </h2>
                {CartItems.map((item) => (
                    <CartItem key={item.id} item={item} />
                ))}

                <div className="mt-6 text-right">
                    <p className="text-xl font-semibold text-[var(--text-color)]">
                        Total: ${total}
                    </p>
                    <button 
                        onClick={handleProceedToPayment}
                        className="mt-2 bg-[var(--accent-color)] text-white py-2 px-4 rounded hover:brightness-110 cursor-pointer">
                        Proceed to checkout
                    </button>
                </div>
            </>
        )}

    </section>
    )
}

export default Cart;