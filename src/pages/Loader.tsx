const Loader = () => {
	return (
		<>
			<div className=" text-black  w-full relative flex flex-col justify-center items-center  text-right bg-white">
				<h1
					style={{
						transform: "translate(60%,-50%)",
					}}
					className="text-black  col-span-1 absolute top-[50%] z-50 hidden lg:flex w-full   px-6 h-fit   text-xl min-[420px]:text-2xl md:text-4xl  justify-start   font-bold tracking-[6px] font-sans"
				>
					<p className="flex items-center w-full justify-start">
						ŚWIAT <span className="text-4xl"> ●</span> ARCHITEKT
					</p>
				</h1>
				<h1 className="text-black  flex lg:hidden w-full   px-6 h-full text-xl min-[420px]:text-2xl md:text-4xl  justify-center   font-bold tracking-[6px] font-sans">
					<p className="flex items-center w-full justify-center">
						ŚWIAT <span className="text-4xl"> ●</span> ARCHITEKT
					</p>
				</h1>
			</div>
		</>
	);
};

export default Loader;
