import { Link, useNavigate, useParams } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useEffect, useRef } from "react";
import { actionTypes, projects } from "../utils/consts";
import { project } from "../utils/types";
import "../Cursor.css";
import ProjectContentTabs from "../components/ProjectContentTabs";
import { useProjectContext } from "../context/context";

const Project = () => {
	const isDesktopOrLaptop = useMediaQuery({
		query: "(min-width: 1024px)",
	});
	const navigate = useNavigate();
	useEffect(() => {
		!isDesktopOrLaptop ? navigate("/") : "";
	}, [isDesktopOrLaptop]);

	const { projectId } = useParams();
	const { state, dispatch } = useProjectContext();
	const { language } = state;
	const cursor = useRef<HTMLDivElement | null>(null);

	const changePosition = (e: React.MouseEvent) => {
		if (cursor.current) {
			cursor.current.style.top = `${e.clientY}px`;
			cursor.current.style.left = `${e.clientX}px`;
		}
	};
	const selectedProject: project | undefined = projects.find(
		(p) => p.en.title === projectId
	);

	if (!selectedProject) {
		// Handle the case where the selected project is not found
		return (
			<div>
				<p>Project not found. Please return to the homepage.</p>
				<Link to="/">Go back</Link>
			</div>
		);
	}
	return (
		<div onMouseMove={changePosition}>
			{/* CURSOR */}
			<div
				className="cursor-style border-4 border-solid bg-gray-600 border-gray-600 "
				ref={cursor}
			>
				<div className="w-full h-full mx-auto flex  justify-center items-center  rounded-full z-10">
					<div className="w-6 h-6 bg-transparent rounded-full"></div>
				</div>
			</div>
			{/* PROJECT */}
			<div className="min-h-screen h-screen overflow-hidden max-h-screen relative bg-red-300">
				<h1
					style={{
						//  mixBlendMode: "screen"
						transform: "translate(60%,-50%)",
					}}
					className="text-white col-span-1 absolute top-[50%] z-50 flex w-full   px-6 h-fit   text-xl min-[420px]:text-2xl md:text-4xl  justify-start   font-bold tracking-[6px] font-sans"
				>
					{/* {item.title} */}
					<p className="flex items-center w-full justify-start">
						ŚWIAT <span className="text-4xl"> ●</span> ARCHITEKT
					</p>
				</h1>

				<div className="grid  grid-cols-1 lg:grid-cols-12 overflow-y-auto  relative gap-0  bg-white w-[100%]">
					<div
						className="pl-20  max-h-screen sticky top-0  lg:pl-10 xl:pl-20 flex flex-col  w-screen lg:w-full
				  justify-start col-span-1  lg:col-span-7
				  items-start text-center pr-10"
					>
						<div className="flex w-full   justify-between min-h-screen relative flex-col ">
							<Link
								to={`/`}
								className=" flex w-full justify-between h-full flex-col"
							>
								<div className="self-start py-10  cursor-pointer">
									<Link
										to={`/`}
										className=""
									>
										<i
											className="pi pi-arrow-left text-gray-500 font-bold hover:text-black"
											style={{ fontSize: "1.3rem" }}
										></i>
									</Link>
								</div>

								<ProjectContentTabs
									description={selectedProject?.[language]?.description}
									title={selectedProject?.[language]?.title}
									date={selectedProject?.[language]?.year}
									location={selectedProject?.[language]?.localisation}
									area={selectedProject?.[language]?.area}
									coauthor={selectedProject?.[language]?.coAuthor}
								/>
							</Link>
							<div className=" absolute bottom-4 flex gap-0 self-end tracking-[2px] font-semibold text-xs">
								<p
									className={` cursor-pointer ${
										language === "pl" ? "text-black" : "text-gray-400"
									}`}
									onClick={() =>
										dispatch({
											type: actionTypes.UPDATE_LANGUAGE,
											payload: "pl",
										})
									}
								>
									PL
								</p>
								<p className="text-gray-400">/</p>
								<p
									className={` cursor-pointer ${
										language === "en" ? "text-black" : "text-gray-400"
									}`}
									onClick={() =>
										dispatch({
											type: actionTypes.UPDATE_LANGUAGE,
											payload: "en",
										})
									}
								>
									EN
								</p>

								<p className="text-gray-400">/</p>
								<p
									className={` cursor-pointer ${
										language === "de" ? "text-black" : "text-gray-400"
									}`}
									onClick={() =>
										dispatch({
											type: actionTypes.UPDATE_LANGUAGE,
											payload: "de",
										})
									}
								>
									DE
								</p>
							</div>
						</div>

						{/*  */}
					</div>

					{/* PROJECT IMAGES */}
					<div className="flex flex-col min-h-screen max-h-screen h-screen relative justify-center   w-full col-span-5">
						{" "}
						{selectedProject.en.img.map((image) => (
							<Link
								to={`/`}
								key={image}
							>
								<section
									className={`${
										selectedProject.en.img.length < 2 ? " min-h-screen  " : ""
									}  flex justify-start cursor-pointer relative  w-full   bg-cover bg-fixed bg-center   items-center`}
								>
									<img
										src={`/images/${image}`}
										// src=""
										alt=""
									/>
									<div className="2xl:w-10/12 w-11/12   flex justify-between  items-center mt-32  "></div>
								</section>
							</Link>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Project;
