import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const themes = {
	winter: "winter",
	sunset: "sunset",
	forest: "forest",
};

const getThemesFromLocalStorage = () => {
	const theme = localStorage.getItem("theme") || themes.winter;
	document.documentElement.setAttribute("data-theme", theme);
	return theme;
};

const initialState = {
	user: { username: "coding addict" },
	theme: getThemesFromLocalStorage(),
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		loginUser: (state, action) => {
			console.log("login");
		},
		logoutUser: (state) => {
			state.user = null;
			localStorage.removeItem("user");
			toast.success("Logged out successfully");
		},
		toggleTheme: (state) => {
			const { winter, sunset, forest } = themes;
			state.theme =
				state.theme === winter
					? forest
					: state.theme === forest
					? sunset
					: winter;
			document.documentElement.setAttribute("data-theme", state.theme);
			localStorage.setItem("theme", state.theme);
		},
	},
});

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;
export default userSlice.reducer;
