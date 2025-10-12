import { cadence, greenPlus, horebWhitePequena, mercantil, tecnexus, terrayama, threedlab } from "../assets";
import SectionCommonHeader from "./SectionCommonHeader";
import SponsorsCarrousel from "./SponsorsCarrousel";

const SPONSOR_QUOTES = [
	{
		logo: horebWhitePequena,
		name: "HOREBY ENERGY",
		quote: "“Conhecer a equipe da Formula SAE UFMG tem sido uma experiência cheia de energia e emoção, conhecendo jovens talentosos que estão construindo um futuro melhor.”",
		author: "Horeb Energy, LinkedIn.",
		logoClass: "h-4",
	},
	{
		logo: tecnexus,
		name: "TECNEXUS",
		quote: "“Desejo a toda a equipe do Fórmula UFMG o sucesso: merecido e conquistado, ele é resultado do emprenho de todos vocês.”",
		author: "Marco Antônio de Paulo, Sócio da empresa.",
		logoClass: "h-5 mr-4",
	},
	{
		logo: cadence,
		name: "CADENCE ACADEMIC NETWORK",
		quote: "“É emocionante ver mentes brilhantes trabalhando. A equipe da Fórmula SAE UFMG está acelerando a inovação usando o software Cadence Fidelity CFD para otimizar seus projetos.”",
		logoClass: "h-5 mr-4",
		author: "Cadence, LinkedIn.",
	},
];

export default function SponsorsSection() {
	const carouselImages = [horebWhitePequena, greenPlus, terrayama, tecnexus, mercantil, threedlab, cadence];

	return (
		<section className="bg-black gap-6 h-full pb-16 relative">
			{/* Título */}

			<div className="md:absolute md:top-0 md:-right-2 md:z-40 md:text-right text-left pl-4 md:-ml-0 -ml-3 w-full xl:w-auto">
				<SectionCommonHeader position="right" text="PATROCINADORES" widthStyle="xl:w-[750px] 2xl:w-[850px]" extraText={"EMPRESAS QUE TORNAM NOSSO PROJETO POSSÍVEL"}/>
			</div>

			{/* Corpo */}
			<div className="flex flex-col 2xl:flex-row justify-between items-stretch">
				{/* ESQUERDA (Carrossel) */}
				<div
					className="
						flex flex-1 w-full px-4 gap-8 2xl:gap-16 2xl:-ml-14 
						bg-[#302F2F] 2xl:mt-0 pt-8
						2xl:skew-x-12
					"
				>
					<div
						className="
							w-full relative flex items-center justify-center 2xl:justify-end
							2xl:-skew-x-12
						"
					>
						<SponsorsCarrousel images={carouselImages} className="w-full 2xl:max-w-3xl" />
					</div>
				</div>

				{/* DIREITA (Depoimentos) */}
				<div
					className="
						flex flex-col flex-1 w-full gap-8 overflow-hidden mt-8
						2xl:skew-x-12 2xl:mt-[70px]
					"
				>
					{SPONSOR_QUOTES.map(({ logo, name, quote, logoClass, author }, index) => (
						<div
							key={index}
							className="
									2xl:ml-8 hover:bg-[#302F2F] transition cursor-pointer
									bg-[#1c1c1c] 2xl:bg-transparent 2xl:mx-0 mx-4 2xl:rounded-none rounded-lg
								"
						>
							<div
								className="
										flex flex-col 2xl:flex-row items-center 2xl:items-center 
										gap-4 2xl:ml-8 2xl:pr-12 p-4
										2xl:-skew-x-12
									"
							>
								<img src={logo} alt={`Logo ${name}`} className={`${logoClass} mb-2 2xl:mb-0`} />
								<div className="hidden 2xl:block w-[1px] h-20 bg-white mx-4" />
								<div className="flex flex-col items-start text-white text-center 2xl:text-left">
									<p className="font-semibold">{name}</p>
									<p className="italic">{quote}</p>
									<div className="flex justify-center 2xl:justify-end w-full pr-0 2xl:pr-12 mt-1">
										<p className="font-thin text-gray-500">{author}</p>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
