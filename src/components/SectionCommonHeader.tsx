import { logoAzul } from "../assets";

export default function SectionCommonHeader({ text, position }: { text: string; position?: "left" | "right" }) {
	const isRight = position === "right";
	const skewOuter = isRight ? "skew-x-[12deg]" : "-skew-x-[12deg]";

	return (
		<div className="relative">
			<div className={`relative md:w-[700px] h-[52px] md:h-[60px] -ml-4 ${skewOuter} overflow-hidden will-change-transform`}>
				{/* Fundo */}
				<div className="absolute inset-0 bg-[#302F2F] drop-shadow-lg backdrop-blur-sm" />

				{/* Faixa azul */}
				<div className="absolute top-0 left-0 h-2 w-4/6 bg-[#0D00FF]" />
			</div>
			{/* Conteúdo (sem distorção) */}
			<div className={`absolute top-0 ${isRight ? "ml-12" : "md:w-[700px]"} flex h-full items-center justify-center gap-x-4`}>
				<img src={logoAzul} alt="Logo azul" className="h-6" />
				<p className="text-xl font-bold text-white italic">{text}</p>
			</div>
		</div>
	);
}
