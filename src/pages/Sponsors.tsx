import { useEffect } from 'react'
import { dLab, horebLogo, kartodromo, sicepotLogo, tecnexusLogo, terrayamaLogo } from '../assets'
import CustomTooltip from '../components/CustomTooltip'

export default function Sponsors() {
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' }) // ou 'auto' se preferir instantâneo
	}, [])

	return (
		<div className="mt-12 p-8 flex items-center justify-center flex-col w-full">
			<div className='max-w-7xl w-full'>
				<h1 className='text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl text-center mt-12'>Nossos Parceiros</h1>
				<div className='w-full flex items-center justify-center flex-col'>
					<p className='text-lg/8 text-gray-600 mt-6 text-center max-w-xl'>Nossos patrocinadores são aqueles que confiam no nosso trabalho e proporcionam o sonho do fórmula ser real. Por meio do auxílio deles que todas nossas conquistas foram possíveis.</p>
					<div data-aos="fade-in" data-aos-delay="100" className='mt-6'>
						<button className='py-4 px-8 w-full rounded-lg hover:opacity-90 transition-all border-2 border-bluetheme-500 bg-bluetheme-500 hover:bg-bluetheme-700 text-white'>
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

				<div data-aos="fade-in" data-aos-delay="200" className='w-full flex items-center justify-center mt-12'>
					<CustomTooltip position='top' content='Horeb Energy'>
						<img
							src={horebLogo}
							alt="Horeb Energy"
							className="w-full sm:w-2/3 md:w-1/2 lg:w-[500px] xl:w-[600px]"
						/>
					</CustomTooltip>
				</div>

				<div className='grid lg:grid-cols-3 sm:grid-cols-1 mt-8'>
					<div data-aos="fade-in" data-aos-delay="300" className='p-4 flex justify-center items-center'>
						<CustomTooltip position='top' content='Horeb Energy'>
							<img src={sicepotLogo} alt="Sicepot" className='h-2/3' />
						</CustomTooltip>
					</div>
					<div data-aos="fade-in" data-aos-delay="400" className='p-4 flex justify-center items-center'>
						<CustomTooltip position='top' content='TecNexus'>
							<img src={tecnexusLogo} alt="TecNexus" />
						</CustomTooltip>
					</div>
					<div data-aos="fade-in" data-aos-delay="500" className='p-4 flex justify-center items-center'>
						<CustomTooltip position='top' content='Terrayama'>
							<img src={terrayamaLogo} alt="Terrayama" className='h-14' />
						</CustomTooltip>
					</div>
				</div>

				<div className='flex items-center justify-center w-full'>
					<div className='grid sm:grid-cols-1 lg:grid-cols-2 max-w-3xl'>
						<div data-aos="fade-in" data-aos-delay="600" className='p-4 flex justify-center items-center'>
							<CustomTooltip position='left' content='3dLab'>
								<img src={dLab} alt="3dLab" className='h-40 w-40' />
							</CustomTooltip>
						</div>
						<div data-aos="fade-in" data-aos-delay="700" className='p-4 flex justify-center items-center'>
							<CustomTooltip position='right' content='Kartodromo'>
								<img src={kartodromo} alt="Kartodromo" />
							</CustomTooltip>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
