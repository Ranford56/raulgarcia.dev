import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import './App.css';
import UnderConstruction from "./views/UnderConstruction";
import Landing from "./views/Landing";
import { XMLProvider } from "./components/providers/XMLProvider";

const App: React.FC = () => {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<>
				<Route path="/" element={<Landing/>}/>
				<Route path="*" element={<UnderConstruction/>}/>
			</>
		))
  return (
		<XMLProvider>
			<RouterProvider router={router}/>
		</XMLProvider>
  );
}

export default App;

