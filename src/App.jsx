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
import { action as registerAction } from "./pages/Register";
import { action as loginAction } from "./pages/Login";
import { store } from "./store";

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
			{ path: "/cart", element: <Cart /> },
			{ path: "/checkout", element: <Checkout /> },
			{ path: "/orders", element: <Orders /> },
		],
	},
	{
		path: "/login",
		element: <Login />,
		errorElement: <Error />,
		action: loginAction(store),
	},
	{
		path: "/register",
		element: <Register />,
		errorElement: <Error />,
		action: registerAction,
	},
]);
const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
