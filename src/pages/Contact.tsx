import { useEffect } from 'react'
import { carrobanner, insta, zap } from '../assets'

export default function Contact() {
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' }) // ou 'auto' se preferir instantâneo
	}, [])

	return (
		<div className="mt-12 p-8 flex items-center justify-center flex-col w-full">
			<div className='max-w-7xl w-full'>
				<div className="relative bg-white">

					<div className="pt-16 pb-24 sm:pt-24 sm:pb-32 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-32">
						<div className="px-6 lg:px-8">
							<div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
								<h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
									Entre em contato
								</h2>
								<p className="mt-2 text-lg/8 text-gray-600">
									Por meio das nossas redes sociais:
								</p>

								<div className="mt-4 mb-4 block sm:flex gap-4">
									<a
										href="https://wa.me/+553189442303"
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-2 rounded-md justify-center sm:justify-normal bg-green-500 px-6 py-3 text-white text-base font-semibold hover:bg-green-600 transition duration-300"
									>
										<img src={zap} className='h-5 w-5' alt="whatsapp logo" />
										WhatsApp
									</a>

									<a
										href="https://www.instagram.com/formulaufmg/"
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center px-6 py-3 mt-3 sm:mt-0 justify-center sm:justify-normal text-base gap-2 rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 sm:px-4 sm:py-2 text-white font-semibold hover:opacity-90 transition duration-300"
									>
										<img src={insta} className='h-5 w-5' alt="instagram logo" />
										Instagram
									</a>
								</div>

								<p className="mt-2 text-lg/8 text-gray-600">
									Ou nos envie um email:
								</p>
								<form className="mt-4">
									<div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">

										<div className="sm:col-span-2">
											<label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">
												Nome
											</label>
											<div className="mt-2.5">
												<input
													id="first-name"
													name="first-name"
													type="text"
													required
													autoComplete="given-name"
													className="block w-full rounded-md border-2 border-bluetheme-400 px-3.5 py-2 text-base text-gray-900 focus:outline-bluetheme-600"
												/>
											</div>
										</div>

										<div className="sm:col-span-2">
											<label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">
												Email
											</label>
											<div className="mt-2.5">
												<input
													id="email"
													name="email"
													type="email"
													required
													autoComplete="email"
													className="block w-full rounded-md border-2 border-bluetheme-400 px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
												/>
											</div>
										</div>
										<div className="sm:col-span-2">
											<div className="flex justify-between text-sm/6">
												<label htmlFor="phone" className="block font-semibold text-gray-900">
													Empresa
												</label>
												<p id="phone-description" className="text-gray-400">
													Opcional
												</p>
											</div>
											<div className="mt-2.5">
												<input
													id="company"
													name="company"
													type="text"
													autoComplete="organization"
													className="block w-full rounded-md border-2 border-bluetheme-400 px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
												/>
											</div>
										</div>
										<div className="sm:col-span-2">
											<div className="flex justify-between text-sm/6">
												<label htmlFor="phone" className="block font-semibold text-gray-900">
													Telefone
												</label>
												<p id="phone-description" className="text-gray-400">
													Opcional
												</p>
											</div>
											<div className="mt-2.5">
												<input
													id="phone"
													name="phone"
													type="tel"
													autoComplete="tel"
													aria-describedby="phone-description"
													className="block w-full rounded-md border-2 border-bluetheme-400 px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
												/>
											</div>
										</div>
										<div className="sm:col-span-2">
											<div className="flex justify-between text-sm/6">
												<label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900">
													Mensagem
												</label>
												<p id="message-description" className="text-gray-400">
													Max 500 caracteres
												</p>
											</div>
											<div className="mt-2.5">
												<textarea
													id="message"
													name="message"
													rows={4}
													required
													aria-describedby="message-description"
													className="block w-full rounded-md border-2 border-bluetheme-400 px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
													defaultValue={''}
												/>
											</div>
										</div>
									</div>

									<div className="mt-10 flex justify-end border-t border-gray-900/10 pt-8">
										<button
											type="submit"
											className="rounded-md bg-bluetheme-600 hover:opacity-90 hover:bg-bluetheme-700 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
										>
											Enviar Mensagem
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>

					<div className="lg:absolute lg:inset-0 lg:left-1/2">
						<img
							alt="Banner do TRX novo carro do formula ufmg"
							src={carrobanner}
							data-aos="fade-in"
							data-aos-delay="100"
							className="h-64 rounded-xl w-full bg-gray-50 object-cover sm:h-80 lg:absolute lg:h-full shadow-2xl shadow-bluetheme-200"
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
