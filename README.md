# ShoppyGlobe

**ShoppyGlobe** is a responsive e-commerce application built with React, Redux, and React Router. It allows users to browse a list of products, view detailed information, add items to a cart, and proceed to checkout. The project emphasizes clean component structure, Redux state management, lazy loading for performance, and user-friendly styling using Tailwind CSS with custom theme variables.

---

## Features

- Product listing with search functionality
- Product detail page with "Add to Cart"
- Cart management with quantity update and item removal
- Redux Toolkit for state management
- Error handling for failed data fetches
- Responsive layout with mobile-friendly navigation
- Lazy loading for large components using React.lazy and Suspense
- NotFound page for all invalid and dynamic routes
- Clean component structure with reusable code

---

## Tech Stack

- React (Vite)
- React Router DOM
- Redux Toolkit
- Tailwind CSS (customized with CSS variables)
- Lucide React Icons

---

## Installation Instructions

Follow these steps to install and run the project locally:

### 1. Clone the repository

```bash
git clone https://github.com/Rawat107/ShoppyGlobe-E-commerce-Application.git
cd shoppyglobe
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173) or provided by vite.

---

## Notes

- Lazy loading is implemented using `React.lazy` and `Suspense` in `main.jsx`.
- All routes are defined using `createBrowserRouter` and wrapped in `<Suspense fallback={<div>Loading...</div>}>`.
- Error handling gracefully redirects to `/not-found` if a product fetch fails.
- Search feature in `ProductList` filters products by name or description.
- Responsive design tested on different screen sizes.

---

## Author

Vaibhav Rawat

---
