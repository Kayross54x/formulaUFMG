import { useEffect, useState, useRef } from "react";
import { arrowR } from "../assets";

interface ImageCarouselProps {
	images: string[];
	interval?: number;
	height?: string;
	showIndicators?: boolean;
	onClickRightCallBack?: (index: number) => void;
	onClickLeftCallBack?: (index: number) => void;
	onSlideChange?: (index: number) => void; // ✅ novo callback
	slideImageProps?: { index: number; className: string }[];
	className?: string;
}

export default function SponsorsCarrousel({
	images,
	interval = 5000,
	height = "h-[400px]",
	showIndicators = true,
	className = "",
	onClickRightCallBack,
	onClickLeftCallBack,
	onSlideChange,
	slideImageProps
}: React.PropsWithChildren<ImageCarouselProps>) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const timerRef = useRef<number | null>(null);

	const changeSlide = (newIndex: number) => {
		setCurrentIndex(newIndex);
		onSlideChange?.(newIndex);
	};

	const prevSlide = () => {
		const index = (currentIndex - 1 + images.length) % images.length;
		changeSlide(index);
		onClickLeftCallBack?.(index);
	};

	const nextSlide = () => {
		const newIndex = (currentIndex + 1) % images.length;
		changeSlide(newIndex);
		onClickRightCallBack?.(newIndex);
	};

	const startTimer = () => {
		if (timerRef.current) clearInterval(timerRef.current);
		timerRef.current = window.setInterval(() => {
			const newIndex = (currentIndex + 1) % images.length;
			changeSlide(newIndex);
			onClickRightCallBack?.(newIndex);
		}, interval);
	};

	useEffect(() => {
		startTimer();
		return () => {
			if (timerRef.current) clearInterval(timerRef.current);
		};
	}, [interval, images.length, currentIndex]);

	const handleManualSelect = (index: number) => {
		changeSlide(index);
		onClickRightCallBack?.(index);
		startTimer();
	};

	function findStyle(index: number) {
		const styleObj = slideImageProps?.find((obj) => obj.index === index);
		return styleObj ? styleObj.className : "object-cover";
	}

	return (
		<div className={`relative w-full xl:mr-12 ${height} overflow-hidden ${className}`}>
			{/* Imagens */}
			{images.map((img, index) => (
				<div
					key={index}
					className={`absolute inset-0 transition-opacity duration-1000 object-contain ease-in-out ${
						index === currentIndex ? "opacity-100" : "opacity-0"
					}`}
				>
					<img
						src={img}
						alt={`Slide ${index + 1}`}
						className={`w-[300px] 2xl:w-[290px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${findStyle(index)}`}
					/>
				</div>
			))}

			{/* Controles */}
			<button
				onClick={prevSlide}
				className="hidden md:block md:absolute cursor-pointer z-40 left-20 top-1/2 -translate-y-1/2 text-white p-2 rounded-full transition"
			>
				<img alt="seta para esquerda" src={arrowR} className="h-8 rotate-180" />
			</button>

			<button
				onClick={nextSlide}
				className="hidden md:block md:absolute cursor-pointer z-40 right-20 top-1/2 -translate-y-1/2 text-white p-2 rounded-full transition"
			>
				<img alt="seta para direita" src={arrowR} className="h-8" />
			</button>

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
