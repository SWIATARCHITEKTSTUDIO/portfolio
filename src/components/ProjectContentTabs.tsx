import {
	TabView,
	TabPanel,
	TabPanelHeaderTemplateOptions,
} from "primereact/tabview";
import { useState } from "react";
import { useProjectContext } from "../context/context";
export type ProjectContentT = {
	description?: string;
	title?: string;
	date?: number;
	location?: string;
	area?: string | undefined;
	coauthor?: string | undefined;
};
const ProjectContentTabs = ({
	description,
	title,
	date,
	location,
	area,
	coauthor,
}: ProjectContentT) => {
	const { state } = useProjectContext();
	const { language } = state;
	const [activeIndex, setActiveIndex] = useState(0);
	const tabOneHeaderTemplate = (options: TabPanelHeaderTemplateOptions) => (
		<div
			onClick={options.onClick}
			className="flex flex-col text-md tracking-[5px] cursor-pointer justify-center items-end  hover:text-black hover:scale-110 transform duration-200 ease-in "
		>
			<h1 className="text-gray-400 font-semibold">
				{" "}
				{language === "en" && `Project`}
				{language === "pl" && `Projekt`}
				{language === "de" && `Projekt`}
			</h1>
			<p
				className={` uppercase text-end ${
					activeIndex === 0 ? "text-black" : "text-gray-500"
				}`}
			>
				{title}
			</p>
		</div>
	);

	const tabTwoHeaderTemplate = (options: TabPanelHeaderTemplateOptions) => (
		<div
			onClick={options.onClick}
			className="flex flex-col text-md tracking-[5px] cursor-pointer justify-center items-end  hover:text-black hover:scale-110 transform duration-200 ease-in "
		>
			<h1 className="text-gray-400 font-semibold">
				{date && (
					<>
						{language === "en" && `Year`}
						{language === "pl" && `Rok`}
						{language === "de" && `Jahr`}
					</>
				)}
			</h1>
			<p
				className={` uppercase text-end ${
					activeIndex === 0 ? "text-black" : "text-gray-500"
				}`}
			>
				{date}
			</p>
		</div>
	);

	const tabThreeHeaderTemplate = (options: TabPanelHeaderTemplateOptions) => (
		<div
			onClick={options.onClick}
			className="flex flex-col text-md tracking-[5px] cursor-pointer justify-center items-end  hover:text-black hover:scale-110 transform duration-200 ease-in "
		>
			<h1 className="text-gray-400 font-semibold">
				{location && (
					<>
						{language === "en" && `Location`}
						{language === "pl" && `Lokalizacja`}
						{language === "de" && `Standort`}
					</>
				)}
			</h1>
			<p
				className={` uppercase text-end ${
					activeIndex === 0 ? "text-black" : "text-gray-500"
				}`}
			>
				{location}
			</p>
		</div>
	);

	const tabFourHeaderTemplate = (options: TabPanelHeaderTemplateOptions) => (
		<div
			onClick={options.onClick}
			className="flex flex-col text-md tracking-[5px] cursor-pointer justify-center items-end  hover:text-black hover:scale-110 transform duration-200 ease-in "
		>
			<h1 className="text-gray-400 font-semibold">
				{area && (
					<>
						{language === "en" && `Area`}
						{language === "pl" && `Powierzchnia`}
						{language === "de" && `Powierzchnia`}
					</>
				)}
			</h1>
			<p
				className={` uppercase text-end ${
					activeIndex === 0 ? "text-black" : "text-gray-500"
				}`}
			>
				{area}
			</p>
		</div>
	);
	const tabFiveHeaderTemplate = (options: TabPanelHeaderTemplateOptions) => (
		<div
			onClick={options.onClick}
			className="flex flex-col text-md tracking-[5px] cursor-pointer justify-center items-end  hover:text-black hover:scale-110 transform duration-200 ease-in "
		>
			<h1 className="text-gray-400 text-end font-semibold">
				{coauthor && (
					<>
						{language === "en" && `CO-AUTHOR`}
						{language === "pl" && `współautorzy`}
						{language === "de" && `co-autoren`}
					</>
				)}
			</h1>
			<p
				className={` uppercase !text-end ${
					activeIndex === 0 ? "text-black " : "text-gray-500 "
				}`}
			>
				{coauthor}
			</p>
		</div>
	);
	return (
		<TabView
			activeIndex={activeIndex}
			onTabChange={(e) => setActiveIndex(e.index)}
			pt={{
				inkbar: { className: "hidden" },
				navContainer: {
					className:
						" order-first lg:order-last w-full flex justify-end pointer-events-none ",
				},
				nav: {
					className:
						"flex  lg:flex-col w-full justify-start  lg:justify-end lg:w-36 xl:w-64  items-end text-left uppercase",
				},
				root: {
					className:
						"flex flex-col absolute  w-full gap-8  lg:gap-2 xl:gap-8  lg:flex-row justify-start items-center h-full",
				},
			}}
		>
			{/* ABOUT ME */}
			<TabPanel
				header="Header I"
				headerTemplate={tabOneHeaderTemplate}
			>
				<div className=" w-full text-left text-pretty  text-gray-700 text-sm font-sans ">
					{description}
				</div>
			</TabPanel>

			{/* PROCESS */}
			<TabPanel
				header="Header I"
				headerTemplate={tabTwoHeaderTemplate}
			>
				<div className=" w-full  text-black text-sm   text-left  xl:text-center overflow-y-scroll font-sans ">
					The entire process is based on an interview regarding the investor's
					needs and preferences, preceded by a detailed field analysis and legal
					conditions of the developed area. For this purpose, we use GIS
					software and aerial photos, which allows us to predict and eliminate
					all threats to the planned investment. After determining the final
					version of the concept, we start preparing the project for the needs
					of administrative procedures and construction processes. We work using
					BIM software - it is parametric software that allows the preparation
					of documentation from the initial stages in 3D technology. Despite
					better inter-industry coordination, the mentioned technology allows
					us, among other things, to provide a 3D design model for independent
					viewing by the client via an online browser. <br /> <br /> In
					addition, we try to make the entire process as transparent as possible
					for each party, which is why we provide constant access to tracking
					the details of the work progress via the monday.com platform. For each
					client, after finalizing the concept, we provide a mock-up of the
					final design in the form of a 3D print.
				</div>
			</TabPanel>

			{/* OFFER */}
			<TabPanel
				header="Header I"
				headerTemplate={tabThreeHeaderTemplate}
			>
				<div className=" w-full   text-black text-sm  text-left  xl:text-center overflow-y-scroll font-sans ">
					Currently, we operate dynamically throughout Poland, offering
					comprehensive design services, starting from the concept through
					construction/execution design, carrying out administrative procedures,
					ending with supervision, including investor representation. We design
					diverse buildings and interiors that are an inseparable element of the
					facilities we develop, creating a coherent whole. We carry out various
					orders, i.e. audits of collections, answering the question of what the
					investor actually needs and how we can solve the problem using
					architectural solutions.
					<br />
					<br /> We also implement investment projects and cooperate with
					developers, offering comprehensive services from land absorption
					analyzes to advertising materials.Thanks to constant cooperation with
					industry specialists, we provide detailed, timely design
					documentation. Moreover, thanks to multi-discipline joint work from
					the beginning of the project, we are able to eliminate many
					coordination errors and cost-optimize our projects, which we perfectly
					prove in the executive documentation.
				</div>
			</TabPanel>
			{/* contact */}

			<TabPanel
				header="Header I"
				headerTemplate={tabFourHeaderTemplate}
			>
				<div className="  w-[320px]  xl:w-[560px] xl:p-10   text-black text-sm text-left  xl:text-center overflow-y-scroll font-sans ">
					<p className="xl:text-lg mb-6">
						Working Hours: Every Working Day <br /> 9:00 AM - 7:00 PM
					</p>
					<div className="text-left  w-11/12 flex flex-col justify-center gap-2 items-start  ">
						<p>
							Tel: <span className="">0048 609 860 020</span>
						</p>
						<p>
							Email:{" "}
							<a
								href="mailto:info@swiatarchitekt.pl"
								className=" hover:font-bold transform-all duration-300 ease-in"
							>
								info@swiatarchitekt.pl
							</a>
						</p>
						<p>Address: Poland • Gdynia • Redłowo</p>
						<div className="mt-2">
							<a
								href="#"
								className=" mr-4"
							>
								LinkedIn
							</a>
							<a
								href="#"
								className=" mr-4"
							>
								Instagram
							</a>
							<a
								href="#"
								className=""
							>
								Facebook
							</a>
						</div>
					</div>
				</div>
			</TabPanel>

			<TabPanel
				header="Header I"
				headerTemplate={tabFiveHeaderTemplate}
			>
				<div className=" w-[320px]  xl:w-[560px] xl:p-10   text-black text-sm text-left  xl:text-center overflow-y-scroll font-sans ">
					<p className="xl:text-lg mb-6">
						Working Hours: Every Working Day <br /> 9:00 AM - 7:00 PM
					</p>
					<div className="text-left  w-11/12 flex flex-col justify-center gap-2 items-start  ">
						<p>
							Tel: <span className="">0048 609 860 020</span>
						</p>
						<p>
							Email:{" "}
							<a
								href="mailto:info@swiatarchitekt.pl"
								className=" hover:font-bold transform-all duration-300 ease-in"
							>
								info@swiatarchitekt.pl
							</a>
						</p>
						<p>Address: Poland • Gdynia • Redłowo</p>
						<div className="mt-2">
							<a
								href="#"
								className=" mr-4"
							>
								LinkedIn
							</a>
							<a
								href="#"
								className=" mr-4"
							>
								Instagram
							</a>
							<a
								href="#"
								className=""
							>
								Facebook
							</a>
						</div>
					</div>
				</div>
			</TabPanel>
		</TabView>
	);
};

export default ProjectContentTabs;
