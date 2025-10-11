import { logoAzul } from "../assets";

export default function NewsLetterHeader({ text }: { text: string }) {
	return (
		<div className="absolute z-40 w-full">
			<div className={`relative w-full md:w-[600px] lg:w-[800px] xl:w-[900px] h-[52px] md:h-[60px] -ml-4 -skew-x-[20deg] overflow-hidden will-change-transform`}>
				{/* Fundo */}
				<div className="absolute inset-0 bg-[#302F2F] drop-shadow-lg backdrop-blur-sm" />

				{/* Faixa azul */}
				<div className="absolute top-0 right-0 h-2 w-[335px] bg-[#0D00FF] skew-x-[20deg]" />
			</div>
			{/* Conteúdo (sem distorção) */}
			<div className={`absolute top-0 w-full md:w-[520px] lg:w-[720px] xl:w-[820px] flex h-full items-center justify-end gap-x-4`}>
				<p className="hidden xl:block text-xs text-[#0D00FF] mt-2 font-bold mr-8">FIQUE POR DENTRO DAS ÚLTIMAS NOTÍCIAS DA EQUIPE</p>
				<p className="text-xl font-bold text-white italic">{text}</p>
				<img src={logoAzul} alt="Logo azul" className="ml-12 h-5 mr-12 md:mr-0" />
			</div>
		</div>
	);
}
