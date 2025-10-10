import { useEffect, useState, useRef } from 'react';
import { banner, car1, car2, car3, car4, fundo1, trophy, video } from '../assets';
import ReactPlayer from 'react-player';
import NewsSection from '../components/NewsSection';
import ImageCarousel from '../components/ImageCarousel';
import CarsSection from '../components/CarsSection';
import CompetitionSection from '../components/CompetitionSection';
import BannersSection from '../components/BannersSection';

const images = [fundo1, car4, car2, car1, car3, trophy]

export default function Home() {
	const titleRef = useRef<HTMLHeadingElement>(null);
	const [isMobile, setIsMobile] = useState(false);
	const [titleWidth, setTitleWidth] = useState(0);

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

	useEffect(() => {
		if (titleRef.current) {
			setTitleWidth(titleRef.current.offsetWidth);
		}
	}, [titleRef.current]);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768);
		};
		handleResize(); // Verifica o tamanho inicial
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<div className='overflow-x-hidden'>
			<div className="absolute inset-0 bg-gradient-to-b z-40 from-black/70 via-black/60 to-black/70" />
			<ImageCarousel images={images} interval={6000} height="min-h-[800px]">
				{/* Texto centralizado */}
				<div className="absolute inset-0 flex flex-col justify-end pb-24 z-40 max-w-[1400px] mx-auto px-4 lg:text-left text-center">
					<h1 ref={titleRef} className="text-3xl text-center w-full md:w-fit md:text-left md:text-4xl font-bold text-white drop-shadow-lg italic">
						A FÓRMULA DO FUTURO COMEÇA AQUI
					</h1>

					<div className={`mt-2 md:flex items-center justify-center lg:justify-start w-full gap-4`} style={{ width: isMobile ? '100%' : `${titleWidth}px` }}>
						<p className="text-xl md:text-2xl md:mb-0 mb-4 text-white drop-shadow-md italic min-w-fit">HOREB ENERGY FÓRMULA UFMG</p>
						<div className="sm:mt-0 mt-4 h-[5px] bg-[#0D00FF] w-full relative overflow-hidden -skew-x-12">
							<div className="h-full w-full bg-[#0D00FF] origin-top-left transform" />
						</div>
					</div>
				</div>
			</ImageCarousel>

			<CarsSection />

			<CompetitionSection />

			<BannersSection />

			<div className="flex items-center justify-center flex-col w-full">
				<div className='w-full flex items-center justify-center flex-col'>
					
					<div data-aos="fade-in" data-aos-delay="200" className='max-w-7xl w-full px-8 '>
						<h4 id='news' className="text-3xl font-bold tracking-[0.2rem]">Notícias</h4>
						<p className='text-sm mt-1 mb-1'>Acompanhe algumas das últimas notícias do fórmula.</p>

						<NewsSection
							highlight={news.highlight}
							secondaries={news.secondaries}
						/>
					</div>

					{/* Estatísticas - seção nova */}
					<div className="w-full bg-white dark:bg-gray-900 pt-16 sm:pb-16 px-8">
						<div className="max-w-7xl mx-auto">
							<h4
								className="text-3xl sm:text-4xl font-bold tracking-[0.2rem] text-center mb-12"
								data-aos="fade-up"
							>
								Nossos números
							</h4>

							<div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
								{[
									{ value: "2º", label: "Lugar Geral na FSAE 2024" },
									{ value: "15+", label: "Anos de História" },
									{ value: "50+", label: "Membros Ativos" },
								].map((stat, i) => (
									<div
										key={i}
										data-aos="fade-up"
										data-aos-delay={100 * (i + 1)}
										className="group relative p-8 rounded-2xl bg-gradient-to-b from-bluetheme-500/90 to-bluetheme-700/90 
						dark:from-bluetheme-800 dark:to-bluetheme-900 
						text-white shadow-lg hover:shadow-2xl border border-white/10 
						hover:scale-105 transition-all duration-300 overflow-hidden"
									>
										{/* Glow effect */}
										<div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-white transition-opacity duration-300"></div>

										<p className="text-6xl font-extrabold drop-shadow-lg">{stat.value}</p>
										<p className="mt-3 text-lg font-medium tracking-wide">{stat.label}</p>
									</div>
								))}
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
