import React, { useState } from "react";
import NewsLetterHeader from "./NewsLetterHeader.";
import { podcast } from "../assets";

export default function NewsLetterSection() {
	const [email, setEmail] = useState("");

	function handleSubmit(event: React.FormEvent) {
		event.preventDefault();
		console.log("Email inscrito:", email);
	}

	return (
		<div className="relative flex-col w-full bg-[#121212] lg:max-h-[350px]">
			<NewsLetterHeader text="NEWSLETTER" />

			<div className="lg:flex items-center h-full pt-[52px] lg:pt-0 overflow-hidden">
				{/* LADO ESQUERDO */}
				<div className="bg-[#121212] -skew-x-[20deg] h-full flex flex-col justify-center items-center lg:items-end lg:justify-end pr-8 pl-8 lg:w-[45%]">
					<div className="skew-x-[20deg] w-full max-w-lg">
						<h2 className="text-md md:text-lg font-bold text-[#302F2F] italic mt-8 mb-2 text-center md:text-end">Inscreva-se com um clique</h2>

						<form onSubmit={handleSubmit} className="flex w-full rounded overflow-hidden">
							{/* INPUT */}
							<input
								type="email"
								placeholder="Insira seu email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className=" p-3 md:p-4 bg-[#302F2F] text-white placeholder-gray-400 focus:outline-none w-full"
								required
							/>

							{/* BOTÃO SKEW */}
							<div className="-skew-x-[20deg]">
								<button
									type="submit"
									className="px-6 md:px-10 py-3 md:py-4 sm:min-w-[160px] -ml-[10px] mr-3 bg-[#0D00FF] text-white font-bold text-sm md:text-base hover:bg-blue-600 transition-all duration-300 h-full"
								>
									Inscrever
								</button>
							</div>
						</form>
					</div>
				</div>

				{/* LADO DIREITO */}
				<div className="lg:max-h-[350px] min-h-full h-full lg:w-[55%] lg:mt-0 md:mt-12 mt-8 flex items-center justify-end bg-[#121212]">
					<img src={podcast} alt="Imagem do podcast do Fórmula" className="h-full object-contain cursor-pointer transition-transform duration-300" />
				</div>
			</div>
		</div>
	);
}
