# ShoppyGlobe: E-commerce Application

ShoppyGlobe is a basic e-commerce application built using **React.js**. It demonstrates various React features, including component-based architecture, state management with Redux, React Router for navigation, and dynamic data fetching. The project is designed to showcase a functional, responsive, and user-friendly e-commerce interface.

---

## Key Features

- **Homepage**: Displays a list of products fetched dynamically from an API.
- **Product Details**: View detailed information about a selected product.
- **Shopping Cart**: Add, remove, or update items.
- **Search Functionality**: Filter products by name dynamically using an input field.
- **Routing**: Seamless navigation between pages with React Router.
- **Error Handling**: Gracefully handles API request failures.
- **Responsive Design**: Optimized for various screen sizes.

---

## Tech Stack

- **Frontend**: React.js with React Router
- **State Management**: Redux (with actions, reducers, and selectors)
- **Styling**: CSS (with responsive design principles, both tailwind and external CSS used)
- **API**: Data fetched from [dummyjson.com](https://dummyjson.com/products)

---

## Project Structure

The application follows a modular and reusable component structure:

- `App`: Main entry point.
- `Header`: Contains navigation menu and shopping cart icon.
- `ProductList`: Displays the list of products.
- `ProductItem`: Represents a single product with an "Add to Cart" button.
- `ProductDetail`: Shows detailed information for a selected product.
- `Cart`: Displays cart items with options to modify quantities or remove items.
- `NotFound`: Displays a 404 error page for unknown routes.

---

## How to Run the Project

i-Node.js (v14 or later)
  npm or yarn

ii-Navigate into the project directory i.e cd ToDoProject

iii-Install the dependencies: i.e npm install
## or if using yarn
yarn


iv-To run the development server with Vite: i.e npm run dev
