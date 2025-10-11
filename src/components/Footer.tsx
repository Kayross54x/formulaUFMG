import { insta, linkedin, tiktok, youtube, onlyLogoSvg, ced, escolaEngUFMG, ctm, lrss, ufmgwhite, horebywhiteSvg, mail, phone } from "../assets";

export default function Footer() {
	const navigation = [
		{
			name: "Instagram",
			href: "https://www.instagram.com/formulaufmg/",
			icon: insta,
		},
		{
			name: "LinkedIn",
			href: "https://www.linkedin.com/company/f%C3%B3rmulaufmg/",
			icon: linkedin,
		},
		{
			name: "TikTok",
			href: "https://www.tiktok.com/@formula.ufmg",
			icon: tiktok,
		},
		{
			name: "YouTube",
			href: "https://www.youtube.com/channel/UCG13U5V92XVoqfVdqQRoEgA",
			icon: youtube,
		},
	];

	return (
		<footer className="bg-[#0D00FF] text-white py-10 px-6 flex flex-col items-center justify-center">
			<div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 gap-8 items-center justify-between">
				{/* Coluna esquerda */}
				<div className="flex flex-col items-start gap-4">
					{/* Logos principais */}
					<div className="flex items-center gap-3">
						<img src={onlyLogoSvg} alt="Fórmula UFMG" className="h-9" />
						<div className="h-14 w-[1px] bg-white -skew-x-12 mx-2" />
						<img src={horebywhiteSvg} onClick={() => window.open("https://horebenergybrasil.com/", "_blank")} alt="Horeb Energy" className="cursor-pointer h-5" />
					</div>

					{/* Contato */}
					<div className="flex flex-col text-sm gap-y-4 mt-4">
						<div className="flex items-center gap-x-5">
							<img src={phone} alt="Telefone" className="h-7" />
							<span>(31) 98944-2303</span>
						</div>
						<div className="flex items-center gap-x-5">
							<img src={mail} alt="Email" className="h-7" />
							<span>formulaufmg@gmail.com</span>
						</div>
					</div>

					{/* Redes sociais */}
					<div className="flex gap-x-4 mt-4">
						{navigation.map((item) => (
							<a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer">
								<img src={item.icon} alt={item.name} className="h-5 hover:scale-110 transition-transform" />
							</a>
						))}
					</div>
				</div>

				{/* Coluna direita */}
				<div className="flex flex-col items-end sm:items-end">
					{/* Logos institucionais */}
					<div className="grid grid-cols-3 grid-rows-2 justify-end gap-x-4 items-center">
						<div className="flex items-center justify-end cursor-pointer hover:scale-105 transition-all" onClick={() => window.open("https://lrss.demec.ufmg.br/", "_blank")}>
							<img src={lrss} alt="LRSS" className="h-18" />
						</div>
						<div className="flex items-center justify-end cursor-pointer hover:scale-105 transition-all" onClick={() => window.open("https://www.eng.ufmg.br/portal/", "_blank")}>
							<img src={escolaEngUFMG} alt="Escola de Engenharia" className="h-9" />
						</div>
						<div className="flex items-center justify-end cursor-pointer hover:scale-105 transition-all" onClick={() => window.open("https://www.ufmg.br/", "_blank")}>
							<img src={ufmgwhite} alt="UFMG" className="h-8" />
						</div>
						<div></div>
						<div className="flex items-center justify-end cursor-pointer hover:scale-105 transition-all" onClick={() => window.open("https://www.ufmg.br/", "_blank")}>
							<img src={ced} alt="CEF" className="h-4" />
						</div>
						<div className="flex items-center justify-end cursor-pointer hover:scale-105 transition-all" onClick={() => window.open("https://ctm.demec.ufmg.br/", "_blank")}>
							<img src={ctm} alt="CTM" className="h-8" />
						</div>
					</div>

					{/* Copyright */}
					<p className="text-[10px] sm:text-xs text-right opacity-80 text-white">
						© Copyright Horeb Energy Fórmula UFMG – 2025. Todos os direitos reservados.
					</p>
				</div>
			</div>
		</footer>
	);
}
