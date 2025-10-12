import { bronzePartner, diamondPartner, goldPartner, silverPartner } from "../assets";
import SectionCommonHeader from "./SectionCommonHeader";

export default function PartnersSection() {
	const partners = [
		{ src: bronzePartner, alt: "Bronze Partner", level: "Bronze", height: "h-[300px] lg:h-[450px]" },
		{ src: silverPartner, alt: "Silver Partner", level: "Prata", height: "h-[350px] lg:h-[500px]" },
		{ src: goldPartner, alt: "Gold Partner", level: "Ouro", height: "h-[400px] lg:h-[550px]" },
		{ src: diamondPartner, alt: "Diamond Partner", level: "Diamante", height: "h-[450px] lg:h-[600px]" },
	];

	return (
		<div className="bg-black gap-6 h-full pb-16">
			<SectionCommonHeader text="SÓCIOS" extraText="CONFIRA NOSSOS PLANOS E VENHA FAZER PARTE"/>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-12 mt-12 max-w-[1600px] mx-auto px-4">
				{partners.map((partner) => (
					<div key={partner.src} className="flex flex-col items-center">
						<img src={partner.src} alt={partner.alt} className={`${partner.height} w-full object-contain cursor-pointer hover:scale-105 transition-all duration-300`} />
						{/* <p className="text-white">{partner.level}</p> */}
					</div>
				))}
			</div>
		</div>
	);
}
