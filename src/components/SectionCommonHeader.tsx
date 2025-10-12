import { logoAzul } from "../assets";

export default function SectionCommonHeader({ text, position, widthStyle, extraText }: { text: string; position?: "left" | "right"; widthStyle?: string; extraText?: string }) {
	const isRight = position === "right";
	const skewOuter = isRight ? "skew-x-[20deg]" : "-skew-x-[20deg]";

	return (
		<div className="relative">
			<div className={`relative ${widthStyle ? widthStyle : "md:w-[700px]"} h-[52px] md:h-[60px] -ml-4 ${skewOuter} overflow-hidden will-change-transform`}>
				{/* Fundo */}
				<div className="absolute inset-0 bg-[#302F2F] drop-shadow-lg backdrop-blur-sm" />

				{/* Faixa azul */}
				<div className="absolute top-0 left-0 h-2 w-4/6 bg-[#0D00FF]" />
			</div>
			{/* Conteúdo (sem distorção) */}
			<div className={`absolute top-0 ${isRight ? "" : "md:w-[700px]"} ml-12 flex h-full items-center justify-center gap-x-4 mt-1`}>
				<img src={logoAzul} alt="Logo azul" className="h-5" />
				<p className="text-xl font-bold text-white italic brightness-200">{text}</p>
				<p className="text-sm font-bold text-[#5C5C5E] italic brightness-200 hidden md:block">{extraText}</p>
			</div>
		</div>
	);
}
