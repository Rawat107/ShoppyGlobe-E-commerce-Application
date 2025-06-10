import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { ShoppingCart, HomeIcon } from 'lucide-react'

const Header = () => {
  const cart = useSelector((state) => state.cart)
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <header className="bg-[var(--primary-color)] text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/Logo.png" alt="Logo" className="w-10 h-10 object-contain" />
          <NavLink to="/" className="text-2xl font-bold cursor-pointer">
            ShoppyGlobe
          </NavLink>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col sm:flex-row items-center gap-4 mt-5 sm:mt-0">
          {/* Home */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-1 px-3 py-1 rounded transition duration-200 ${
                isActive
                  ? 'bg-white text-[var(--primary-color)] font-semibold'
                  : 'hover:bg-white hover:text-[var(--primary-color)]'
              }`
            }
          >
            <HomeIcon className="w-4 h-4" />
            Home
          </NavLink>

          {/* Cart */}
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `relative flex items-center gap-1 px-3 py-1 rounded transition duration-200 ${
                isActive
                  ? 'bg-white text-[var(--primary-color)] font-semibold'
                  : 'hover:bg-white hover:text-[var(--primary-color)]'
              }`
            }
          >
            <ShoppingCart className="w-4 h-4" />
            Cart
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[var(--error-color)] text-white text-xs rounded-full px-1">
                {cartCount}
              </span>
            )}
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header
