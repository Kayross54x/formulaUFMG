import React from 'react'
import { carrobanner, souza, trophy, trophy2 } from '../assets'

export default function Contact() {
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

								<div className="mt-4 mb-4 flex gap-4">
									<a
										href="https://wa.me/SEUNUMEROAQUI"
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-2 rounded-md bg-green-500 px-6 py-3 text-white text-base font-semibold hover:bg-green-600 transition duration-300"
									>
										WhatsApp
									</a>

									<a
										href="https://www.instagram.com/formulaufmg/"
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center text-base gap-2 rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 px-4 py-2 text-white font-semibold hover:opacity-90 transition duration-300"
									>
										<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
											<path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zm0 1.5h8.5A4.25 4.25 0 0120.5 7.75v8.5a4.25 4.25 0 01-4.25 4.25h-8.5A4.25 4.25 0 013.5 16.25v-8.5A4.25 4.25 0 017.75 3.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 1.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm5.25-.88a.88.88 0 100 1.76.88.88 0 000-1.76z" />
										</svg>
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
							alt=""
							src={carrobanner}
							className="h-64 rounded-xl w-full bg-gray-50 object-cover sm:h-80 lg:absolute lg:h-full shadow-2xl shadow-bluetheme-200"
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
