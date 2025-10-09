import { useEffect, useState, useRef } from "react";

interface ImageCarouselProps {
	images: string[];
	interval?: number; // tempo entre transições (ms)
	height?: string; // altura mínima ou fixa do carrossel
	showIndicators?: boolean; // se mostra os botões de seleção
	className?: string; // classes extras para customização
}

export default function ImageCarousel({ images, interval = 6000, height = "min-h-[800px]", showIndicators = true, className = "" }: ImageCarouselProps) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [titleWidth, setTitleWidth] = useState(0);
	const timerRef = useRef<number | null>(null);
	const titleRef = useRef<HTMLHeadingElement>(null);

	const startTimer = () => {
		if (timerRef.current) clearInterval(timerRef.current);
		timerRef.current = window.setInterval(() => {
			setCurrentIndex((prev) => (prev + 1) % images.length);
		}, interval);
	};

	useEffect(() => {
		startTimer();
		return () => {
			if (timerRef.current) clearInterval(timerRef.current);
		};
	}, [interval, images.length]);

	useEffect(() => {
		if (titleRef.current) {
			setTitleWidth(titleRef.current.offsetWidth);
		}
		window.addEventListener("resize", () => {
			if (titleRef.current) setTitleWidth(titleRef.current.offsetWidth);
		});
	}, []);

	const handleManualSelect = (index: number) => {
		setCurrentIndex(index);
		startTimer();
	};

	return (
		<div className={`relative w-full ${height} bg-bluetheme-500 ${className}`}>
			{/* Imagens */}
			{images.map((img, index) => (
				<div
					key={index}
					className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
						index === currentIndex ? "opacity-100" : "opacity-0"
					}`}
					style={{ backgroundImage: `url(${img})` }}
				/>
			))}

			{/* Texto centralizado */}
			<div className="absolute inset-0 flex flex-col justify-end pb-24 z-40 max-w-[1400px] mx-auto px-4 lg:text-left text-center">
				<h1 ref={titleRef} className="text-3xl md:text-4xl w-fit font-bold text-white drop-shadow-lg italic">
					A FÓRMULA DO FUTURO COMEÇA AQUI
				</h1>
				<div className="mt-2 sm:flex items-center justify-center lg:justify-start gap-4" style={{ width: `${titleWidth}px` }}>
					<p className="text-xl md:text-2xl text-white drop-shadow-md italic min-w-fit">HOREB ENERGY FÓRMULA UFMG</p>
					<div className="sm:mt-0 mt-4 h-[5px] bg-[#0D00FF] w-full relative overflow-hidden -skew-x-12">
						<div className="h-full w-full bg-[#0D00FF] origin-top-left transform" />
					</div>
				</div>
			</div>

			{/* Indicadores / botões de navegação */}
			{showIndicators && (
				<div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 flex gap-3 items-center justify-center">
					{images.map((_, index) => (
						<button
							key={index}
							onClick={() => handleManualSelect(index)}
							className={`rounded-full border hover:bg-white transition-all duration-400 ${
								currentIndex === index ? "w-3 h-3 border-white bg-white" : "border-white w-3 h-3"
							}`}
						/>
					))}
				</div>
			)}
		</div>
	);
}
