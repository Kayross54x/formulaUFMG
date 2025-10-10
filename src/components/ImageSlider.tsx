import { useState, useEffect } from "react";
import { arrowR } from "../assets";
import DefaultButton from "./DefaultButton";

interface ImageSliderProps {
	images: string[];
}

export default function ImageSlider({ images }: ImageSliderProps) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [timeLeft, setTimeLeft] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	});

	const prevSlide = () => {
		setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
	};

	const nextSlide = () => {
		setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
	};

	useEffect(() => {
		const targetDate = new Date("2026-07-29T00:00:00").getTime();

		const interval = setInterval(() => {
			const now = new Date().getTime();
			const diff = targetDate - now;

			if (diff <= 0) {
				clearInterval(interval);
				setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
				return;
			}

			const days = Math.floor(diff / (1000 * 60 * 60 * 24));
			const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
			const minutes = Math.floor((diff / (1000 * 60)) % 60);
			const seconds = Math.floor((diff / 1000) % 60);

			setTimeLeft({ days, hours, minutes, seconds });
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	const formatNumber = (num: number) => num.toString().padStart(2, "0");

	return (
		<div className="relative w-full h-[350px] sm:h-[450px] md:h-[400px] flex items-center justify-center rounded-md mt-4 mb-12 sm:mb-0">
			{/* Imagem atual */}
			<img
				src={images[currentIndex]}
				alt={`slide-${currentIndex}`}
				className="w-full h-full object-cover transition-all max-w-xl duration-700 ease-in-out rounded-md"
			/>

			{/* Botão com contagem regressiva */}
			<div className="absolute top-0 right-10 -translate-y-1/2">
				<p className="text-xs mb-1 ml-2">PRÓXIMA FSAE BRASIL:</p>
				<DefaultButton disableAnimation>
					<div className="flex items-end justify-center gap-2 px-3">
						{/* Números */}
						<div className="flex gap-2 text-white text-2xl font-bold tracking-wider skew-x-12">
							<span>{formatNumber(timeLeft.days)}</span>:
							<span>{formatNumber(timeLeft.hours)}</span>:
							<span>{formatNumber(timeLeft.minutes)}</span>:
							<span>{formatNumber(timeLeft.seconds)}</span>
						</div>
					</div>
					{/* Legendas */}
					<div className="flex justify-between text-[10px] font-semibold text-black -mt-1 uppercase">
						<span className="ml-8">dd</span>
						<span className="ml-2">hh</span>
						<span className="ml-2">mm</span>
						<span className="mr-5">ss</span>
					</div>
				</DefaultButton>
			</div>

			{/* Botão esquerdo */}
			<button
				onClick={prevSlide}
				className="absolute -left-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full transition"
			>
				<img alt="seta para esquerda" src={arrowR} className="h-8 rotate-180" />
			</button>

			{/* Botão direito */}
			<button
				onClick={nextSlide}
				className="absolute -right-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full transition"
			>
				<img alt="seta para direita" src={arrowR} className="h-8" />
			</button>

			{/* Indicadores inferiores */}
			<div className="absolute bottom-3 flex gap-2">
				{images.map((_, index) => (
					<div
						key={index}
						className={`w-2.5 h-2.5 rounded-full transition-all ${
							index === currentIndex ? "bg-white scale-125" : "bg-white/40"
						}`}
					/>
				))}
			</div>
		</div>
	);
}
