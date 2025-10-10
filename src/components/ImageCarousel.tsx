import { useEffect, useState, useRef } from "react";
import { arrowR } from "../assets";

interface ImageCarouselProps {
	images: string[];
	interval?: number; // tempo entre transições (ms)
	height?: string; // altura mínima ou fixa do carrossel
	showIndicators?: boolean; // se mostra os botões de seleção
	className?: string; // classes extras para customização
}

export default function ImageCarousel({
	images,
	interval = 5000,
	height = "h-[400px]",
	showIndicators = true,
	className = "",
	children,
}: React.PropsWithChildren<ImageCarouselProps>) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const timerRef = useRef<number | null>(null);

	const prevSlide = () => {
		setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
	};

	const nextSlide = () => {
		setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
	};

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

			{children}

			{/* Botão esquerdo */}
			<button
				onClick={prevSlide}
				className="hidden sm:absolute cursor-pointer z-40 left-20 top-1/2 -translate-y-1/2 text-white p-2 rounded-full transition"
			>
				<img alt="seta para esquerda" src={arrowR} className="h-8 rotate-180" />
			</button>

			{/* Botão direito */}
			<button
				onClick={nextSlide}
				className="hidden sm:absolute cursor-pointer z-40 right-20 top-1/2 -translate-y-1/2 text-white p-2 rounded-full transition"
			>
				<img alt="seta para direita" src={arrowR} className="h-8" />
			</button>

			{/* Indicadores / botões de navegação */}
			{showIndicators && (
				<div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40 flex gap-3 items-center justify-center">
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
