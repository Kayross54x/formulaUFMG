type News = {
	img: string
	title: string
	description: string
	data?: string
}

type NewsSectionProps = {
	highlight: News
	secondaries: News[]
}

export default function NewsSection({ highlight, secondaries }: NewsSectionProps) {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 mt-6 h-full md:max-h-[500px] min-h-[400px]">
			<div className="relative group overflow-hidden rounded-md shadow-2xl shadow-bluetheme-100 h-full cursor-pointer">
				<img
					src={highlight.img}
					alt={highlight.title}
					className="object-fill w-full h-full transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:opacity-70"
				/>
				<div className="absolute bottom-4 left-4 right-4 z-10 text-white opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
					<h5 className="text-xl font-semibold drop-shadow-md">{highlight.title}</h5>
					<p className="text-sm mt-1 drop-shadow-sm">{highlight.description}</p>
				</div>
			</div>

			<div className="flex flex-col">
				{secondaries.map((news, index) => (
					<div className="block sm:flex gap-4 mb-6 last:mb-0 cursor-pointer" key={index}>
						<img src={news.img} alt={news.title} className="h-48 w-full sm:max-w-[600px] object-cover rounded-md shadow-2xl shadow-bluetheme-100" />
						<div>
							<p className="text-2xl text-gray-800 font-bold mt-4 sm:mt-0">{news.title}</p>
							<p className="text-md text-gray-800 line-clamp-custom">{news.description}</p>
							<p className="text-md text-gray-400 mt-2">{news.data}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
