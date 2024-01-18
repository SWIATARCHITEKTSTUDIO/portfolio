import React from "react";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primeicons/primeicons.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import Project from "./pages/Project.tsx";
import { ProjectContextProvider } from "./context/context.tsx";

const router = createBrowserRouter([
	{
		path: "/projects/:projectId",
		element: <Project />,
	},
	{
		path: "/",
		element: <App />,
	},
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<PrimeReactProvider value={{ unstyled: true }}>
			<ProjectContextProvider>
				<RouterProvider router={router} />
			</ProjectContextProvider>
		</PrimeReactProvider>
	</React.StrictMode>
);
