import ImageCarousel from "./ImageCarousel";
import { car1, car2, car3, car4 } from "../assets";
import SectionCommonHeader from "./SectionCommonHeader";
import { useNavigate } from "react-router-dom";
import DefaultButton from "./DefaultButton";

const images = [car4, car2, car1, car3];

function CarStats({ type, value }: { type: string; value: string }) {
	return (
		<div className="p-2 text-white">
			<h3 className="text-md">{type}</h3>
			<p className="text-5xl font-bold">{value}</p>
		</div>
	);
}

export default function CarsSection() {
	const navigate = useNavigate();

	return (
		<div className="flex-col w-full">
			<ImageCarousel images={images} interval={6000} height="min-h-[500px]">
				<div className="absolute top-0 left-0 z-40 flex flex-col gap-4 w-full h-full">
					<SectionCommonHeader text="Nossos Carros" />

					<div className="flex items-center justify-between w-full max-w-[1400px] mx-auto px-4 pt-4 h-[70%]">
						<div>
							<CarStats type="Motor" value="Honda CB600F" />
							<CarStats type="Velocidade máxima" value="130 Km/h" />
							<CarStats type="Peso" value="213 Kg" />
						</div>
						<div className="flex items-end justify-end h-full">
							<DefaultButton text="Conheça o TR-X" onClick={() => navigate("/sponsor")} />
						</div>
					</div>
				</div>
			</ImageCarousel>
		</div>
	);
}
