import { useEffect } from 'react'
import { cadence, decarbon, dLab, horebLogo, kartBetim, kartodromo, nce, sicepotLogo, souza, tecnexusLogo, terrayamaLogo, UFER } from '../assets'
import CustomTooltip from '../components/CustomTooltip'

export default function Sponsors() {
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' }) // ou 'auto' se preferir instantâneo
	}, [])

	const sponsors = [
		{ src: sicepotLogo, alt: 'Sicepot', tooltip: 'top', delay: 300 },
		{ src: tecnexusLogo, alt: 'TecNexus', tooltip: 'top', delay: 400 },
		{ src: terrayamaLogo, alt: 'Terrayama', tooltip: 'top', delay: 500, className: 'h-14' },
		{ src: dLab, alt: '3dLab', tooltip: 'top', delay: 600, className: 'h-40 w-40' },
		{ src: kartodromo, alt: 'Kartodromo', tooltip: 'top', delay: 700 },
		{ src: cadence, alt: 'Cadence', tooltip: 'top', delay: 800 },
		{ src: decarbon, alt: 'Decarbon', tooltip: 'top', delay: 900 },
		{ src: kartBetim, alt: 'Kartódromo Betim', tooltip: 'top', delay: 1000 },
		{ src: nce, alt: 'NCE', tooltip: 'top', delay: 1100 },
		{ src: souza, alt: 'Souza Inox', tooltip: 'top', delay: 1200 },
		{ src: UFER, alt: 'UfER', tooltip: 'top', delay: 1300 },
	]

	return (
		<div className="mt-12 p-8 flex items-center justify-center flex-col w-full">
			<div className='max-w-7xl w-full'>
				<h1 className='text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl text-center mt-12'>Nossos Parceiros</h1>
				<div className='w-full flex items-center justify-center flex-col'>
					<p className='text-lg/8 text-gray-600 mt-6 text-center max-w-xl'>Nossos patrocinadores são aqueles que confiam no nosso trabalho e proporcionam o sonho do fórmula ser real. Por meio do auxílio deles que todas nossas conquistas foram possíveis.</p>
					<div data-aos="fade-in" data-aos-delay="100" className='mt-6'>
						<button className='py-4 px-8 w-full rounded-lg  transition-all border-2 border-bluetheme-500 bg-bluetheme-500 hover:opacity-90 hover:bg-bluetheme-700 text-white'>
							Seja um patrocinador
						</button>
					</div>
				</div>

				<div className="relative mt-12">
					<div aria-hidden="true" className="absolute inset-0 flex items-center">
						<div className="w-full border-t border-gray-300" />
					</div>
					<div className="relative flex justify-center">
						<span className="bg-white px-2 text-sm text-gray-500">Obrigado</span>
					</div>
				</div>

				{/* Destaque */}
				<div data-aos="fade-in" data-aos-delay="200" className='w-full flex items-center justify-center mt-12'>
					<CustomTooltip position='top' content='Horeb Energy'>
						<img
							src={horebLogo}
							alt="Horeb Energy"
							className="w-full sm:w-2/3 md:w-1/2 lg:w-[500px] xl:w-[600px]"
						/>
					</CustomTooltip>
				</div>

				{/* Resto */}
				<div className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols1 mt-8'>
					{sponsors.map((item, index) => (
						<div data-aos="fade-in" data-aos-delay={item.delay} className='p-4 flex justify-center items-center' key={index}>
							{/*@ts-ignore*/}
							<CustomTooltip position={item.tooltip} content={item.alt}>
								<img src={item.src} alt={item.alt} className={item.className ? item.className : ""} />
							</CustomTooltip>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
