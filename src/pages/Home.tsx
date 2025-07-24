import { useEffect, useState, useRef } from 'react';
import { banner, car1, car2, car3, car4, carrobanner, ferro, redbull, teamSecondPlace, trophy, trophy2, video } from '../assets';
import { ChevronDownIcon } from '@heroicons/react/16/solid';
import ReactPlayer from 'react-player';
import NewsSection from '../components/NewsSection';

const images = [car4, car2, car1, car3, trophy]

export default function Home() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const timerRef = useRef<number | null>(null);

	const news = {
		highlight: {
			img: banner,
			title: 'Rollout do Fórmula',
			description: 'Ficamos entre os melhores na FSAE 2024!'
		},
		secondaries: [
			{
				img: trophy,
				title: '2º Lugar na FSAE 2024',
				description: 'A equipe do fórmula conquistou o segundo lugar (GERAL) na competição Fórmula SAE Brasil',
				data: '03/08/2025'
			},
			{
				img: car4,
				title: '2º Lugar na FSAE 2024',
				description: 'A equipe do fórmula conquistou o segundo lugar (GERAL) na competição Fórmula SAE Brasil',
				data: '03/08/2025'
			}
		]
	}

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

			<div className="flex items-center justify-center flex-col w-full">
				<div className='w-full flex items-center justify-center flex-col'>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-4 sm:mb-12 max-w-7xl w-full mt-12 p-8 '>
						<div>
							<h4 data-aos="fade-in" className="text-4xl font-bold tracking-[0.2rem]">Fórmula UFMG</h4>
							<p data-aos="fade-up" data-aos-delay="100" className="mt-4 mb-4 text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-2xl">
								Somos uma equipe acadêmica da UFMG que projeta e constrói carros de corrida para competir na Fórmula SAE Brasil.
							</p>
							<p data-aos="fade-up" data-aos-delay="200" className='text-gray-700 text-base sm:text-lg text-justify'>
								A <span className='text-bluetheme-500 text-base sm:text-lg text-shadow-sm drop-shadow-sm'>Fórmula UFMG</span>, atualmente nomeada <span className='text-bluetheme-500 text-shadow-sm drop-shadow-sm'>Horeb Energy Fórmula UFMG</span>, é uma equipe multidisciplinar formada por estudantes da UFMG que projeta, fabrica e compete com um carro de corrida tipo Fórmula SAE.
								Participamos anualmente da competição <span className='text-bluetheme-500 text-shadow-sm drop-shadow-sm'>Fórmula SAE Brasil</span>, onde somos avaliados em diversas áreas como engenharia, inovação, gestão e desempenho em pista.
							</p>
							<p data-aos="fade-up" data-aos-delay="300" className='sm:text-lg text-base text-gray-700 mt-4 text-justify'>
								<span className='text-bluetheme-500 text-base sm:text-lg text-shadow-sm drop-shadow-sm'>Missão:</span> Aplicar conhecimentos de engenharia na prática, formando profissionais altamente capacitados e impulsionando a inovação no setor automotivo.
							</p>
						</div>

						<div data-aos="fade-in">
							<img src={teamSecondPlace} className='rounded-md shadow-2xl shadow-bluetheme-100' alt="Imagem do time" />
							<p className='text-xs text-gray-500 mt-2 text-center'>2º Lugar - Equipe Fórmula UFMG - FSAE 2024</p>
						</div>
					</div>

					<div data-aos="fade-in" data-aos-delay="200" className='max-w-7xl w-full px-8 '>
						<h4 id='news' className="text-4xl font-bold tracking-[0.2rem]">Notícias</h4>
						<p className='text-sm mt-1 mb-1'>Acompanhe algumas das últimas notícias do fórmula.</p>

						<NewsSection
							highlight={news.highlight}
							secondaries={news.secondaries}
						/>
					</div>

					<div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 mt-0 sm:mt-12 w-full '>
						<div className='w-full h-[300px] sm:h-[600px]'>
							<img className='w-full h-full object-cover' src={trophy2} />
						</div>
						<div className='w-full h-[300px] sm:h-[600px]'>
							<img className='w-full h-full object-cover' src={carrobanner} />
						</div>
						<div className='w-full h-[300px] sm:h-[600px]'>
							<img className='w-full h-full object-cover' src={redbull} />
						</div>
						<div className='w-full h-[300px] sm:h-[600px]'>
							<img className='w-full h-full object-cover' src={ferro} />
						</div>
					</div>

					{/* Estatísticas - seção nova */}
					<div className="w-full bg-white dark:bg-gray-900 pt-16 sm:pb-16 px-8">
						<div className="max-w-7xl mx-auto">
							<h4 className="text-3xl sm:text-4xl font-bold tracking-[0.2rem] text-center mb-12" data-aos="fade-up">
								Nossos números
							</h4>

							<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
								<div data-aos="fade-up" data-aos-delay="100" className="shadow-bluetheme-200 dark:bg-bluetheme-900 text-bluetheme-900 dark:text-white p-6 rounded-lg shadow-md border border-bluetheme-200 dark:border-bluetheme-800">
									<p className="text-5xl font-bold mb-2">2º</p>
									<p className="text-lg font-medium">Lugar Geral na FSAE 2024</p>
								</div>

								<div data-aos="fade-up" data-aos-delay="200" className="shadow-bluetheme-200 dark:bg-bluetheme-900 text-bluetheme-900 dark:text-white p-6 rounded-lg shadow-md border border-bluetheme-200 dark:border-bluetheme-800">
									<p className="text-5xl font-bold mb-2">15+</p>
									<p className="text-lg font-medium">Anos de História</p>
								</div>

								<div data-aos="fade-up" data-aos-delay="300" className="shadow-bluetheme-200 dark:bg-bluetheme-900 text-bluetheme-900 dark:text-white p-6 rounded-lg shadow-md border border-bluetheme-200 dark:border-bluetheme-800">
									<p className="text-5xl font-bold mb-2">50+</p>
									<p className="text-lg font-medium">Membros Ativos</p>
								</div>
							</div>
						</div>
					</div>

					<div className='mb-6 sm:mb-16 max-w-7xl w-full mt-4 sm:mt-0 p-8 '>
						<h4 className="text-3xl sm:text-4xl font-bold tracking-[0.2rem] text-center animate-gradient gradient-text text-transparent mb-12">Por que o automobilismo é o que nos move</h4>

						<ReactPlayer
							src={video}
							width='100%'
							height='100%'
							playing
							muted
							className='rounded-xl shadow-2xl shadow-bluetheme-200 border-2 border-bluetheme-400 neonborder'
							controls
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
