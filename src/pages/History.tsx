import { useEffect } from "react";
import { trophy } from "../assets";

export default function History() {
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' }) // ou 'auto' se preferir instantâneo
	}, [])

	const events = [
		{
			year: "2008",
			title: "Fundação",
			description:
				"O fórmula é um projeto de extensão que surgiu em 2008 na Universidade Federal de Minas Gerais para competir na Fórmula SAE Brasil, uma competição de engenharia automobilística que acontece anualmente no estado de São Paulo. O fórmula surgiu como um incentivo à ciência e à tecnologia.",
		},
		{
			year: "2011",
			title: "11º lugar no FSAE Brasil 2011",
			description:
				"iMac is an all-in-one Mac desktop. It has evolved through seven distinct forms and has been the core of Apple's consumer desktop line.",
		},
		{
			year: "2013",
			title: "4º lugar no FSAE Brasil 2013",
			description:
				"The iPod was Apple's portable media player line, released in 2001. It was discontinued in 2022 after over 450 million units sold.",
		},
		{
			year: "2019",
			title: "4º lugar no FSAE Brasil 2019",
			description:
				"First announced by Steve Jobs in 2007, the iPhone revolutionized the smartphone market. Over 2.2 billion iPhones have been sold as of 2018.",
		},
		{
			year: "2024",
			title: "2º lugar na FSAE Brasil 2024",
			img: trophy,
			imgAlt: "Imagem do troféu de segundo lugar",
			description:
				"A equipe do fórmula conquistou o segundo lugar (GERAL) na competição Fórmula SAE Brasil A equipe do fórmula conquistou o segundo lugar (GERAL) na competição Fórmula SAE Brasil A equipe do fórmula conquistou o segundo lugar (GERAL) na competição Fórmula SAE Brasil A equipe do fórmula conquistou o segundo lugar (GERAL) na competição Fórmula SAE Brasil A equipe do fórmula conquistou o segundo lugar (GERAL) na competição Fórmula SAE Brasil ",
		},
		{
			year: "2025",
			title: "Mudança de patrocinador",
			description:
				"A equipe do fórmula conquistou o segundo lugar (GERAL) na competição Fórmula SAE Brasil A equipe do fórmula conquistou o segundo lugar (GERAL) na competição Fórmula SAE Brasil A equipe do fórmula conquistou o segundo lugar (GERAL) na competição Fórmula SAE Brasil A equipe do fórmula conquistou o segundo lugar (GERAL) na competição Fórmula SAE Brasil A equipe do fórmula conquistou o segundo lugar (GERAL) na competição Fórmula SAE Brasil ",
		},
	];

	return (
		<div className="mt-12 p-8 flex items-center justify-center flex-col w-full">
			<div>
				<h1 className="mb-12 mt-12 text-4xl font-bold tracking-[0.2rem]">Conheça a nossa <span className="text-4xl font-bold tracking-[0.2rem] animate-gradient gradient-text text-transparent">História</span></h1>
			</div>
			{/* Desktop layout */}
			<div className="hidden md:block relative max-w-7xl w-full">
				{/* Linha central */}
				<div className="absolute top-0 bottom-0 left-1/2 w-1 bg-gray-300 transform -translate-x-1/2 z-0" />
				<ul className="space-y-16">
					{events.map((event, index) => (
						<li key={index} className="relative flex items-start">
							{/* Lado esquerdo */}
							<div className={`w-1/2 px-8 ${index % 2 === 0 ? "text-right" : ""}`}>
								{index % 2 === 0 && (
									<div data-aos="fade-right" data-aos-duration={150 * (index + 1)} className="flex flex-col items-end">
										<p className="text-sm font-mono text-gray-500 mb-1">{event.year}</p>
										<h3 className="text-lg font-bold text-bluetheme-700">{event.title}</h3>
										<p className="mt-1 text-gray-600 text-sm">{event.description}</p>
										{event.img && (
											<img src={`${event.img}`} alt={event.imgAlt} className="mt-2 max-h-96 rounded-md shadow-2xl shadow-bluetheme-100" />
										)}
									</div>
								)}
							</div>

							{/* Bolinha central */}
							<div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-bluetheme-500 rounded-full border-4 border-white z-10 top-0" />

							{/* Lado direito */}
							<div className={`w-1/2 px-8 ${index % 2 !== 0 ? "text-left" : ""}`}>
								{index % 2 !== 0 && (
									<div data-aos="fade-left" data-aos-duration={100 * (index + 1)} className="flex flex-col items-start">
										<p className="text-sm font-mono text-gray-500 mb-1">{event.year}</p>
										<h3 className="text-lg font-bold text-bluetheme-700">{event.title}</h3>
										<p className="mt-1 text-gray-600 text-sm">{event.description}</p>
										{event.img && (
											<img src={`${event.img}`} alt={event.imgAlt} className="mt-2 max-h-96 rounded-md shadow-2xl shadow-bluetheme-100" />
										)}
									</div>
								)}
							</div>
						</li>
					))}
				</ul>
			</div>

			{/* Mobile layout */}
			<div className="block md:hidden relative max-w-3xl w-full">
				{/* Linha lateral esquerda */}
				<div className="absolute top-0 bottom-0 left-4 w-1 bg-gray-300 z-0" />
				<ul className="space-y-12 pl-12">
					{events.map((event, index) => (
						<li key={index} className="relative bottom-1">
							{/* Bolinha lateral */}
							<div className="absolute -left-10 w-5 h-5 bg-bluetheme-500 rounded-full border-4 border-white z-10 top-1" />
							<div>
								<time className="text-sm font-mono text-gray-500">{event.year}</time>
								<h3 data-aos="fade-left" data-aos-duration={200 * (index + 1)} className="text-lg font-bold text-bluetheme-700">{event.title}</h3>
								<p data-aos="fade-left" data-aos-duration={200 * (index + 1)} className="mt-1 text-gray-600 text-sm">{event.description}</p>
								{event.img && (
									<img src={`${event.img}`} alt={event.imgAlt} className="mt-2 max-h-96 rounded-md shadow-2xl shadow-bluetheme-100" />
								)}
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
