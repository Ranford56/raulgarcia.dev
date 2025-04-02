import PreviewLanding from "../components/PreviewLanding"

const Landing = () => {
	return(
		<div className="flex h-full justify-center items-center mx-3 md:mx-6">
			<div className="grid content-evenly grid-cols-1 grid-rows-2 gap-[10vw] md:grid-cols-2 md:grid-rows-1">
				<div className="min-h-[200px]">
					<h1 id="heading">Raúl García</h1>
					<p className="text-gray-500 leading-tight">aka. ranford</p>
					<p className="mt-2">React Developer | API & Microservices Architect | Database Design Specialist</p>
				</div>
				<div className="min-h-[200px]">
					<PreviewLanding />
				</div>
			</div>
		</div>
	)
}

export default Landing
