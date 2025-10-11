import { useEffect, useState, useRef } from "react";
import { banner, car4, fundo1, homeSecondSlide, homeThirdSlide, trophy, video } from "../assets";
import ReactPlayer from "react-player";
import NewsSection from "../components/NewsSection";
import ImageCarousel from "../components/ImageCarousel";
import CarsSection from "../components/CarsSection";
import CompetitionSection from "../components/CompetitionSection";
import BannersSection from "../components/BannersSection";
import NewsLetterSection from "../components/NewsLetterSection";

const images = [fundo1, homeSecondSlide, homeThirdSlide];

export default function Home() {
	const titleRef = useRef<HTMLHeadingElement>(null);
	const [isMobile, setIsMobile] = useState(false);
	const [titleWidth, setTitleWidth] = useState(0);
	const [activeSlide, setActiveSlide] = useState(0);

	const news = {
		highlight: {
			img: banner,
			title: "Rollout do Fórmula",
			description: "Ficamos entre os melhores na FSAE 2024!",
		},
		secondaries: [
			{
				img: trophy,
				title: "2º Lugar na FSAE 2024",
				description: "A equipe do fórmula conquistou o segundo lugar (GERAL) na competição Fórmula SAE Brasil",
				data: "03/08/2025",
			},
			{
				img: car4,
				title: "2º Lugar na FSAE 2024",
				description: "A equipe do fórmula conquistou o segundo lugar (GERAL) na competição Fórmula SAE Brasil",
				data: "03/08/2025",
			},
		],
	};

	useEffect(() => {
		if (titleRef.current) {
			setTitleWidth(titleRef.current.offsetWidth);
		}
	}, [titleRef.current]);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768);
		};
		handleResize(); // Verifica o tamanho inicial
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<div className="overflow-x-hidden">
			<ImageCarousel slideImageProps={[{ index: 1, className: "object-contain bg-black" }, { index: 2, className: "w-full h-full object-cover " }]} images={images} interval={6000} height="min-h-[750px]" onSlideChange={setActiveSlide}>
				{/* Texto centralizado com fade */}
				<div>
					<div
						className={`absolute inset-0 flex flex-col justify-end pb-24 z-40 max-w-[1400px] mx-auto px-4 lg:text-left text-center
					transition-all duration-1000 ease-in-out
					${activeSlide === 1 || activeSlide === 2 ? "opacity-0 blur-sm" : "opacity-100 blur-0"}`}
					>
						<h1 ref={titleRef} className="text-3xl text-center w-full md:w-fit md:text-left md:text-4xl font-bold text-white drop-shadow-lg italic">
							A FÓRMULA DO FUTURO COMEÇA AQUI
						</h1>

						<div
							className="mt-2 md:flex items-center justify-center lg:justify-start w-full gap-4"
							style={{ width: isMobile ? "100%" : `${titleWidth}px` }}
						>
							<p className="text-xl md:text-2xl md:mb-0 mb-4 text-white drop-shadow-md italic min-w-fit">HOREB ENERGY FÓRMULA UFMG</p>
							<div className="sm:mt-0 mt-4 h-[5px] bg-[#0D00FF] w-full relative overflow-hidden -skew-x-12">
								<div className="h-full w-full bg-[#0D00FF]" />
							</div>
						</div>
					</div>
				</div>

			</ImageCarousel>

			<CarsSection />

			<CompetitionSection />

			<BannersSection />

			<NewsLetterSection />


			{/* <ReactPlayer
				src={video}
				width="100%"
				height="100%"
				playing
				muted
				className="rounded-xl shadow-2xl shadow-bluetheme-200 border-2 border-bluetheme-400 neonborder"
				controls
			/> */}
		</div>
	);
}
