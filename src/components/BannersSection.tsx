import { carrobanner, ferro, redbull, trophy2 } from "../assets";
import SectionCommonHeader from "./SectionCommonHeader";

export default function BannersSection() {
	return (
		<div className="relative bg-black">
			{/* Header: absoluto em telas médias+ e estático à esquerda em telas pequenas */}
			<div className="md:absolute md:top-0 md:-right-2 md:z-40 md:text-right text-left pl-4 md:-ml-0 -ml-2">
				<SectionCommonHeader
					position="right"
					text="INSTAGRAM"
				/>
			</div>

			<div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 w-full">
				{[redbull, trophy2, carrobanner, ferro].map((img, i) => (
					<div
						key={i}
						className="w-full h-[300px] sm:h-[600px] overflow-hidden group z-10"
					>
						<img
							src={img}
							onClick={() => window.open("https://www.instagram.com/formulaufmg/", "_blank")}
							className="cursor-pointer w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
						/>
					</div>
				))}
			</div>
		</div>
	);
}
