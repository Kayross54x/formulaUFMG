import SectionCommonHeader from "./SectionCommonHeader";
import { capacete, car1, car2, car3, trx2 } from "../assets";
import DefaultButton from "./DefaultButton";
import ImageSlider from "./ImageSlider";

export default function CompetitionSection() {
	const images = [capacete, trx2, car2, car1, car3];

	return (
		<div className="flex-col w-full bg-[#121212] min-h-[600px]">
			<SectionCommonHeader text="Fórmula SAE Brasil" />

			<div className="grid pb-12 md:pb-0 grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 items-center justify-between w-full max-w-[1400px] mx-auto px-4 pt-4 mt-4 text-white">
				<div className="mb-8 sm:mb-0 max-w-lg">
					<p className="mb-4" data-aos="fade-right" data-aos-delay="200">
						A Fórmula SAE Brasil é a <b>maior competição estudantil de engenharia automobilística do país</b>.
					</p>
					<p className="mb-4" data-aos="fade-right" data-aos-delay="300">
						Anualmente nossa equipe <b>projeta, constrói e compete com o carro estilo Fórmula</b>, unindo inovação, trabalho em equipe e prática de
						engenharia em nível real.
					</p>
					<p className="mb-4" data-aos="fade-right" data-aos-delay="400">
						Todo ano, <b>mais de 40 equipes</b> se reúnem em São Paulo para serem submetidos à <b>provas de justificativa de projeto</b> (provas
						estáticas) e <b>desempenho em pista</b> (provas dinâmicas).
					</p>
					<DefaultButton text="Saiba mais" onClick={() => window.open("https://www.fsaebrasil.com.br/", "_blank")} data-aos="fade-in" data-aos-delay="500"/>
				</div>

				<div data-aos="fade-in" data-aos-delay="400">
					<ImageSlider images={images} />
				</div>
			</div>
		</div>
	);
}
