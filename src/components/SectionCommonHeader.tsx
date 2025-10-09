import React from "react";
import { logoAzul } from "../assets";

export default function SectionCommonHeader({ text }: { text: string }) {
	return (
		<div className="w-[700px] h-[60px] -ml-4 -skew-x-[12deg] drop-shadow-lg z-50 bg-[#302F2F] pb-2 backdrop-blur-sm">
			<div className="h-2 w-4/6 bg-[#0D00FF]"></div>
			<div className="flex h-full items-center justify-center gap-x-4 skew-x-[12deg]">
				<img src={logoAzul} alt="Logo azul" />
				<p className="text-xl font-bold text-white italic">{text}</p>
			</div>
		</div>
	);
}
