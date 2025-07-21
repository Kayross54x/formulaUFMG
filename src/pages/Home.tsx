import { useEffect, useState, useRef } from 'react'
import { banner, car1, car2, car3, car4, teamSecondPlace, trophy } from '../assets'
import { ArrowDownCircleIcon, ChevronDownIcon } from '@heroicons/react/16/solid'

const images = [car4, car2, car1, car3, trophy]

export default function Home() {
	const [currentIndex, setCurrentIndex] = useState(0)
	const timerRef = useRef<NodeJS.Timeout | null>(null)

	const startTimer = () => {
		if (timerRef.current) clearInterval(timerRef.current)
		timerRef.current = setInterval(() => {
			setCurrentIndex((prev) => (prev + 1) % images.length)
		}, 6000)
	}

	useEffect(() => {
		startTimer()
		return () => {
			if (timerRef.current) clearInterval(timerRef.current)
		}
	}, [])

	const handleManualSelect = (index: number) => {
		setCurrentIndex(index)
		startTimer()
	}

	function redirectToDiv() {
		document.getElementById("scroll")?.scrollIntoView({ behavior: 'smooth' })
	}

	return (
		<div>
			<div className="relative w-full min-h-screen bg-bluetheme-500">
				{images.map((img, index) => (
					<div
						key={index}
						className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'
							}`}
						style={{ backgroundImage: `url(${img})` }}
					/>
				))}
				<div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 items-center">

					<div onClick={redirectToDiv} data-aos="fade-up" data-aos-delay="300" className='flex flex-col items-center justify-center mb-10 cursor-pointer'>
						<p className='text-xs text-white uppercase flex items-center tracking-[0.2em] mb-3'>Descubra</p>
						<ChevronDownIcon className='h-6 w-6 text-white animate-bounce' />
						{/* <ArrowDownCircleIcon className='h-6 w-6 text-white animate-bounce'/> */}
					</div>

					<div className='flex gap-3 items-center justify-center' id="scroll">
						{images.map((_, index) => (
							<button
								key={index}
								onClick={() => handleManualSelect(index)}
								className={`rounded-full border hover:bg-bluetheme-500 transition-all duration-400 ${currentIndex === index ? 'w-3 h-3 border-bluetheme-500 bg-bluetheme-500 scale-125' : 'bg-white/30 border-white/30 w-2 h-2'
									}`}
							/>
						))}
					</div>

				</div>
			</div>

			<div className="mt-12 p-8 flex items-center justify-center flex-col w-full">
				<div className='max-w-7xl w-full'>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-12'>
						<div>
							<h4 data-aos="fade-in" className="text-4xl font-bold tracking-[0.2rem]">Fórmula UFMG</h4>
							<p data-aos="fade-up" data-aos-delay="100" className="mt-4 mb-4 text-lg text-gray-700 dark:text-gray-300 max-w-2xl">
								Somos uma equipe acadêmica da UFMG que projeta e constrói carros de corrida para competir na Fórmula SAE Brasil.
							</p>
							<p data-aos="fade-up" data-aos-delay="200" className='text-lg text-gray-700'>
								A <span className='text-bluetheme-500 text-shadow-sm drop-shadow-sm'>Fórmula UFMG</span>, atualmente nomeada <span className='text-bluetheme-500 text-shadow-sm drop-shadow-sm'>Horeb Energy Fórmula UFMG</span>, é uma equipe multidisciplinar formada por estudantes da UFMG que projeta, fabrica e compete com um carro de corrida tipo Fórmula SAE.
								Participamos anualmente da competição <span className='text-bluetheme-500 text-shadow-sm drop-shadow-sm'>Fórmula SAE Brasil</span>, onde somos avaliados em diversas áreas como engenharia, inovação, gestão e desempenho em pista.
							</p>
							<p data-aos="fade-up" data-aos-delay="300" className='text-lg text-gray-700 mt-4'>
								<span className='text-bluetheme-500 text-shadow-sm drop-shadow-sm'>Missão:</span> Aplicar conhecimentos de engenharia na prática, formando profissionais altamente capacitados e impulsionando a inovação no setor automotivo.
							</p>
						</div>

						<div data-aos="fade-in">
							<img src={teamSecondPlace} className='rounded-md shadow-2xl shadow-bluetheme-100 ' alt="Imagem do time" />
							<p className='text-xs text-gray-500 mt-2 text-center'>Equipe Fórmula UFMG - FSAE 2024</p>
						</div>
					</div>

					<div data-aos="fade-in" data-aos-delay="200" >
						<h4 id='news' className="text-4xl font-bold tracking-[0.2rem]">Notícias</h4>
						<p className='text-sm mt-1 mb-1'>Acompanhe algumas das últimas notícias do fórmula.</p>

						<div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 mt-6 max-h-[500px] min-h-[400px]'>
							<div className="relative group overflow-hidden rounded-md shadow-2xl shadow-bluetheme-100 h-full cursor-pointer">
								<img
									src={banner}
									alt="Imagem do time"
									className="object-fill w-full h-full transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:opacity-70"
								/>
								<div className="absolute bottom-4 left-4 right-4 text-white opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
									<h5 className="text-xl font-semibold drop-shadow-md">Rollout do Fórmula</h5>
									<p className="text-sm mt-1 drop-shadow-sm">Ficamos entre os melhores na FSAE 2024!</p>
								</div>
							</div>

							<div className='flex flex-col'>
								<div className='flex gap-4 mb-6 cursor-pointer'>
									<img src={trophy} className='h-48 max-w-[600px] rounded-md shadow-2xl shadow-bluetheme-100' alt="Imagem do time" />
									<div>
										<p className='text-2xl text-gray-800 font-bold'>2º na FSAE 2024</p>
										<p className='text-md text-gray-800 line-clamp-custom'>A equipe do fórmula conquistou o segundo lugar (GERAL) na competição Fórmula SAE Brasil</p>

										<p className='text-md text-gray-400 mt-2'>03/08/2025</p>
									</div>
								</div>

								<div className='flex gap-4 cursor-pointer'>
									<img src={car4} className='rounded-md shadow-2xl h-48 max-w-[600px] shadow-bluetheme-100' alt="Imagem do time" />
									<div>
										<p className='text-2xl text-gray-800 font-bold'>2º na FSAE 2024</p>
										<p className='text-md text-gray-800 line-clamp-custom'>A equipe do fórmula conquistou o segundo lugar (GERAL) na competição Fórmula SAE Brasil</p>

										<p className='text-md text-gray-400 mt-2'>03/08/2025</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className='mt-28 mb-16'>
						<h4 className="text-4xl font-bold tracking-[0.2rem] text-center animate-gradient gradient-text text-transparent">Por que o automobilismo é o que nos move</h4>
						<p className='text-4xl text-center mt-12'>Colocar um video aqui</p>
						<p className='text-xl text-center mt-12 text-bluetheme-700'>Nos conheça um pouco melhor</p>

						<div className='flex w-full items-center justify-center gap-6 mt-8'>
							<div data-aos="fade-up" data-aos-delay="100" className='max-w-[150px] w-full'>
								<button className='transition-all py-4 px-8  w-full border-2 border-bluetheme-500 bg-bluetheme-500 hover:bg-bluetheme-700 text-white rounded-lg'>
									Loja
								</button>
							</div>
							<div data-aos="fade-up" data-aos-delay="200" className='max-w-[150px] w-full'>
								<button className='transition-all py-4 px-8 border-2 w-full hover:bg-gray-100 rounded-lg'>
									História
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
