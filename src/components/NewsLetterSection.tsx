import React, { useState } from "react";
import NewsLetterHeader from "./NewsLetterHeader.";
import { podcast } from "../assets";

export default function NewsLetterSection() {
	const [email, setEmail] = useState("");

	function handleSubmit(event: React.FormEvent) {
		event.preventDefault();
		// Lógica para enviar o email para a newsletter
		console.log("Email inscrito:", email);
	}

	return (
		<div className="relative flex-col w-full bg-[#121212] lg:max-h-[350px]">
			<NewsLetterHeader text="NEWSLETTER" />

			<div className="lg:flex items-center h-full pt-[52px] lg:pt-0 overflow-hidden">
				<div className="bg-[#121212] -skew-x-[20deg] h-full flex flex-col justify-center items-center lg:items-end lg:justify-end pr-8 pl-8 lg:w-[45%]">
					<div className="skew-x-[20deg]">
						<h2 className="text-md md:text-lg font-bold text-[#302F2F] italic mt-8 mb-1 text-center md:text-end">Inscreva-se com um clique</h2>
						<form onSubmit={handleSubmit}>
							<input
								type="email"
								placeholder="Insira seu email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="p-3 xl:p-4 bg-[#302F2F] focus:outline-none xl:w-80 text-white placeholder-gray-400"
								required
							/>
							<button
								type="submit"
								className={`relative overflow-hidden px-8 xl:px-12 -ml-3 text-center py-3 xl:py-4 -skew-x-[20deg] text-white text-md font-bold transition-all duration-300 bg-[#0D00FF] `}
							>
								<p className="skew-x-12 relative z-10 text-sm md:text-base">Inscrever</p>
							</button>
						</form>
					</div>
				</div>
				
				<div className="lg:max-h-[350px] h-full lg:w-[55%] lg:mt-0 md:mt-12 mt-8 flex items-center justify-end bg-[#121212]">
					<img src={podcast} alt="Imagem do podcast do fórmula" className="h-full object-contain cursor-pointer transition-transform duration-300" />
				</div>
			</div>
		</div>
	);
}
