import { cinza } from "../assets";
import SectionCommonHeader from "./SectionCommonHeader";

export default function ProductsSection() {
	return (
		<div className="bg-black text-white pb-24">
			<SectionCommonHeader text="PRODUTOS" extraText="CONHEÇA OS PRODUTOS EXCLUSIVOS DO FÓRMULA UFMG" widthStyle="md:w-[800px]" />

			<div className="mt-12 max-w-[1400px] mx-auto px-4">
				{/* Tag “Lançamento” */}
				<div className="py-1 px-8 bg-[#0D00FF] w-fit -skew-x-12 mb-6 -ml-6">
					<p className="text-white text-lg font-bold skew-x-12">Lançamento</p>
				</div>

				<div className="grid grid-cols-5 gap-6">
					{/* ESQUERDA - Imagens principais */}
					<div className="col-span-5 lg:col-span-4 flex gap-6">
						{/* Miniaturas */}
						<div className="hidden sm:flex flex-col gap-6">
							<img src={cinza} alt="Miniatura 1" className="cursor-pointer w-20 h-20 object-cover bg-[#444]" />
							<img src={cinza} alt="Miniatura 2" className="cursor-pointer w-20 h-20 object-cover bg-[#444]" />
							<img src={cinza} alt="Miniatura 3" className="cursor-pointer w-20 h-20 object-cover bg-[#444]" />
						</div>

						{/* Imagem principal + texto */}
						<div className="flex flex-col">
							{/* Imagem grande */}
							<div className="flex gap-8">
								<img src={cinza} alt="Imagem principal" className="w-[240px] sm:w-[350px] xxs:h-[150px] h-[200px] sm:h-[290px] object-cover bg-[#444]" />

								{/* Texto e botão */}
								<div className="flex flex-col justify-left">
									<p className="text-gray-500 mb-2 text-md sm:text-lg">Vestuário</p>
									<h2 className="text-xl sm:text-2xl font-bold mb-4">Camisa de oficina | TR-11</h2>
									<p className="text-xl sm:text-3xl mb-6">
										R$ <span className="text-3xl sm:text-5xl font-extrabold">65,00</span>
									</p>

									<button className="bg-[#0D00FF] hover:bg-[#2f2fff] transition text-md sm:text-lg font-bold px-8 py-1 text-white w-fit">Comprar</button>
								</div>
							</div>
						</div>
					</div>

					{/* DIREITA - Produtos secundários */}
					<div className="col-span-5 lg:col-span-1 flex flex-row md:flex-row lg:flex-col md:justify-between md:gap-4 flex-wrap gap-8 mt-8 lg:-mt-4">
						{[
							{ nome: "Toronado", preco: 140 },
							{ nome: "Ferradura", preco: 35 },
							{ nome: "Sela dourada", preco: 65 },
						].map((item, i) => (
							<div key={i} className="flex">
								{/* Imagem mini */}
								<img src={cinza} alt={item.nome} className="w-24 h-full object-cover bg-[#444]" />

								{/* Texto e botão */}
								<div className="flex flex-col items-left ml-5">
									<p className="text-base font-bold">{item.nome}</p>
									<p className="text-sm mb-2">
										R$ <span className="text-2xl font-bold">{item.preco}</span>
									</p>
									<button className="bg-[#0D00FF] w-fit hover:bg-[#2f2fff] transition text-white text-xs px-4 py-1">Comprar</button>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
