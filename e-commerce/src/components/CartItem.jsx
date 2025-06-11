import { useDispatch } from 'react-redux';
import { updateQuantity, removeFromCart } from '../redux/cartSlice';


const CartItem = ({ item }) => {
    const dispatch = useDispatch()

    const handleDecrease = () => {
        if(item.quantity > 1){
            dispatch(updateQuantity({id: item.id, quantity: item.quantity -1}))

        }
    }

    const handleIncrease = () => {
        dispatch(updateQuantity({id: item.id, quantity: item.quantity + 1}))
    }

    return (
        <section className='card-box flex items-center justify-between mb-4'>
            <div className='flex items-center gap-5'>
                <img 
                    src={item.thumbnail} 
                    alt={item.title} 
                    className='w-20 h-20 object-cover rounded'
                />
                <div>
                    <h3 className='font-semibold text-[var(--text-color)]'>
                        {item.title}
                    </h3>
                    <p className='text-sm text-[var(--subtext-color)]'>{item.price}</p>
                </div>
            </div>

            <div className='flex flex-col md:flex-row items-center justify-between gap-2'>
                <div className='flex items-center gap-2 justify-between'>
                    <button
                        onClick={handleDecrease}
                        className='px-2 py-1 bg-[var(--primary-color)] text-white rounded cursor-pointer'
                    >
                        -
                    </button>
                    <span className='font-semibold text-[var(--text-color)]'>
                        {item.quantity}
                    </span>
                    <button
                        onClick={handleIncrease}
                        className='px-2 py-1 bg-[var(--primary-color)] text-white rounded cursor-pointer'
                    >
                        +
                    </button>
                </div>
                <button 
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className='md:ml-4 px-2 py-1 bg-[var(--error-color)] text-white rounded cursor-pointer'
                >
                    Remove
                </button>
            </div>
        </section>
    )
}

export default CartItem