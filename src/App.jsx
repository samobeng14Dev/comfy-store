import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
	About,
	Cart,
	Checkout,
	Error,
	HomeLayout,
	Landing,
	Login,
	Orders,
	Products,
	Register,
	SingleProducts,
} from "./pages";
import { ErrorElement } from "./components";

//loaders
import { loader as landingLoader } from "./pages/Landing";
import { loader as singleProductsLoader } from "./pages/SingleProducts";
import { loader as productsLoader } from "./pages/Products";

//actions

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomeLayout />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: <Landing />,
				errorElement: <ErrorElement />,
				loader: landingLoader,
			},
			{ path: "/about", element: <About /> },
			{
				path: "/products",
				element: <Products />,
				errorElement: <ErrorElement />,
				loader: productsLoader,
			},
			{
				path: "/products/:id",
				element: <SingleProducts />,
				errorElement: <ErrorElement />,
				loader: singleProductsLoader,
			},
			{ path: "/cart/:id", element: <Cart /> },
			{ path: "/checkout", element: <Checkout /> },
			{ path: "/orders", element: <Orders /> },
		],
	},
	{
		path: "/login",
		element: <Login />,
		errorElement: <Error />,
	},
	{
		path: "/register",
		element: <Register />,
		errorElement: <Error />,
	},
]);
const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
