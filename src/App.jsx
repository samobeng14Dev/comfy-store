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

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomeLayout />,
		errorElement: <Error />,
		children: [
			{ index: true, element: <Landing /> },
			{ path: "/about", element: <About /> },
			{ path: "/products", element: <Products /> },
			{ path: "/products/:id", element: <SingleProducts /> },
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