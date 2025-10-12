import ImageCarousel from "./ImageCarousel";
import { tr9, trx } from "../assets";
import SectionCommonHeader from "./SectionCommonHeader";
import { useNavigate } from "react-router-dom";
import DefaultButton from "./DefaultButton";
import { useState, useEffect } from "react";

const images = [trx, tr9];

function CarStats({ type, value }: { type: string; value: string }) {
	return (
		<div className="p-2 text-white">
			<h3 className="text-sm md:text-md">{type}</h3>
			<p className="text-3xl md:text-5xl font-bold">{value}</p>
		</div>
	);
}

export default function CarsSection() {
	const navigate = useNavigate();
	const [index, setIndex] = useState(0);
	const [fadeState, setFadeState] = useState<"fade-in" | "fade-out">("fade-in");

	const Trx = (
		<div className="sm:flex items-center justify-between w-full max-w-[1400px]">
			<div>
				<CarStats type="Motor" value="Honda CB600F" />
				<CarStats type="Velocidade máxima" value="130 Km/h" />
				<CarStats type="Peso" value="213 Kg" />
			</div>
			<div className="flex items-end justify-end sm:h-full">
				<DefaultButton text="Conheça o TR-X" onClick={() => navigate("/sponsor")} />
			</div>
		</div>
	);

	const Tr9 = (
		<div className="sm:flex items-center justify-between w-full max-w-[1400px]">
			<div>
				<CarStats type="Motor" value="Honda CB600F" />
				<CarStats type="Velocidade máxima" value="120 Km/h" />
				<CarStats type="Peso" value="217 Kg" />
			</div>
			<div className="flex items-end justify-end sm:h-full">
				<DefaultButton text="Conheça o TR-09" onClick={() => navigate("/sponsor")} />
			</div>
		</div>
	);

	const cars = [Trx, Tr9];

	const nextSlide = () => {
		setFadeState("fade-out");
		setTimeout(() => {
			setIndex((prevIndex) => (prevIndex + 1) % cars.length);
			setFadeState("fade-in");
		}, 300); // tempo igual ao da animação CSS
	};

	const prevSlide = () => {
		setFadeState("fade-out");
		setTimeout(() => {
			setIndex((prevIndex) => (prevIndex - 1 + cars.length) % cars.length);
			setFadeState("fade-in");
		}, 300);
	};

	return (
		<div className="flex-col w-full">
			<ImageCarousel
				images={images}
				onClickRightCallBack={nextSlide}
				onClickLeftCallBack={prevSlide}
				interval={5000}
				height="min-h-[500px]"
			>
				<div className="absolute top-0 left-0 z-40 flex flex-col gap-4 w-full h-full">
					<SectionCommonHeader text="Nossos Carros" />

					{/* Contêiner com fade animado */}
					<div
						className={`flex justify-center px-12 md:px-36 pt-4 h-[70%] transition-opacity duration-500 ease-in-out ${
							fadeState === "fade-in" ? "opacity-100" : "opacity-0"
						}`}
					>
						{cars[index]}
					</div>
				</div>
			</ImageCarousel>
		</div>
	);
}
