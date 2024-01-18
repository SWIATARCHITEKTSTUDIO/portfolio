import { useRef, useState } from "react";
import { useInterval } from "primereact/hooks";

import Home from "./pages/Home";
import Loader from "./pages/Loader";
import "./Cursor.css";
import { useProjectContext } from "./context/context";
import { actionTypes } from "./utils/consts";

function App() {
	const cursor = useRef<HTMLDivElement | null>(null);
	const { state, dispatch } = useProjectContext();
	const [seconds, setSeconds] = useState(state.loaderTiming);
	const [active, setActive] = useState(true);
	const changePosition = (e: React.MouseEvent) => {
		if (cursor.current) {
			cursor.current.style.top = `${e.clientY}px`;
			cursor.current.style.left = `${e.clientX}px`;
		}
	};
	useInterval(
		() => {
			if (seconds !== 0) {
				setSeconds((prevSecond) => (prevSecond === 1 ? 0 : prevSecond - 1));
			} else {
				setActive(false);

				dispatch({
					type: actionTypes.UPDATE_LOADER_TIME,
					payload: 0,
				});
			}
		},
		500,
		active
	);

	return (
		<div
			onMouseMove={changePosition}
			className=" w-screen h-screen  max-h-fit overflow-y-auto overflow-x-hidden"
		>
			<div
				className="hidden lg:flex cursor-style w-6 h-6 bg-white border-white lg:bg-gray-600  border-4 border-solid lg:border-gray-600 "
				ref={cursor}
			>
				<div className="w-full h-full mx-auto flex  justify-center items-center  rounded-full z-10">
					<div className="w-6 h-6 bg-transparent rounded-full"></div>
				</div>
			</div>
			{active && state.loaderTiming !== 0 ? (
				<div className="flex w-full h-screen justify-center bg-white items-center">
					<Loader />
				</div>
			) : (
				<section className="w-12/12 overflow-auto h-screen  max-h-fit relative">
					<Home />
				</section>
			)}
		</div>
	);
}

export default App;
