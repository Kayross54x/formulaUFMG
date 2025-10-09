import React from "react";
import SectionCommonHeader from "./SectionCommonHeader";
import { teamSecondPlace } from "../assets";
import DefaultButton from "./DefaultButton";

export default function CompetitionSection() {
	return (
		<div className="flex-col w-full bg-[#121212] min-h-[600px]">
			<SectionCommonHeader text="Fórmula SAE Brasil" />

			<div className="grid grid-cols-1 sm:grid-cols-2 items-center justify-between w-full max-w-[1400px] mx-auto px-4 pt-4 pb-16 text-white">
				<div className="mb-8 sm:mb-0 max-w-lg" data-aos="fade-in" data-aos-delay="200">
					<p className="mb-4">
						A Fórmula SAE Brasil é a <b>maior competição estudantil de engenharia automobilística do país</b>.
					</p>
					<p className="mb-4">
						Anualmente nossa equipe <b>projeta, constrói e compete com o carro estilo Fórmula</b>, unindo inovação, trabalho em equipe e prática de
						engenharia em nível real.
					</p>
					<p className="mb-4">
						Todo ano, <b>mais de 40 equipes</b> se reúnem em São Paulo para serem submetidos à <b>provas de justificativa de projeto</b> (provas
						estáticas) e <b>desempenho em pista</b> (provas dinâmicas).
					</p>
					<DefaultButton text="Saiba mais" onClick={() => window.open("https://www.fsaebrasil.com.br/", "_blank")} />
				</div>
				<div data-aos="fade-in">
					<img src={teamSecondPlace} className="rounded-md shadow-2xl shadow-gray-900 h-[80%]" alt="Imagem do time" />
				</div>
			</div>
		</div>
	);
}
