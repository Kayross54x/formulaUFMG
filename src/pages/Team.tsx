import React, { useEffect } from 'react'
import { teamSecondPlace } from '../assets'

export default function Team() {
	const people = [
		{
			name: 'Emma Dorsey',
			role: 'Senior Developer',
			imageUrl:
				'https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
			bio: 'Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui est accusamus exercitationem natus ut voluptas. Officiis velit eos ducimus.',
			xUrl: '#',
			linkedinUrl: '#',
		},
		{
			name: 'Alicia Bell',
			role: 'Junior Copywriter',
			imageUrl:
				'https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
			bio: 'Turpis lectus et amet elementum. Mi duis integer sed in vitae consequat. Nam vitae, in felis mi dui tempus. Porta at turpis eu odio. Et, sed duis in blandit bibendum accumsan. Purus viverra facilisi suspendisse quis est.',
			xUrl: '#',
			linkedinUrl: '#',
		},
		{
			name: 'Jenny Wilson',
			role: 'Studio Artist',
			imageUrl:
				'https://images.unsplash.com/photo-1507101105822-7472b28e22ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
			bio: 'Aliquet adipiscing lectus praesent cras sed quis lectus egestas erat. Bibendum curabitur eget habitant feugiat nec faucibus eu lorem suscipit. Vitae vitae tempor enim eget lacus nulla leo.',
			xUrl: '#',
			linkedinUrl: '#',
		},
		{
			name: 'Anna Roberts',
			role: 'Partner, Creative',
			imageUrl:
				'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
			bio: 'Quis bibendum velit diam tellus sed ut. Faucibus posuere enim, vitae enim eget neque tortor. Metus lectus mattis id id. Tellus ornare etiam id velit ut enim lacinia congue ultrices. Sit morbi vel elit a maecenas mauris elit lectus magna.',
			xUrl: '#',
			linkedinUrl: '#',
		},
	]

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' }) // ou 'auto' se preferir instantâneo
	}, [])

	return (
		<div className="mt-12 p-8 flex items-center justify-center flex-col w-full">
			<div className='max-w-7xl w-full'>
				<div className="bg-white mt-12">
					<div className="mx-auto max-w-7xl grid-cols-1 gap-20 px-0 lg:px-8">
						<div className="mx-auto lg:mx-0">
							<h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl text-center">Nossa Equipe</h2>
							<div className='w-full flex items-center justify-center flex-col'>
								<p className="mt-6 text-lg/8 text-gray-600 max-w-7xl text-center">
									<span className='text-bluetheme-500 text-shadow-sm drop-shadow-sm'>Fundada em 2008 por estudantes de Engenharia Mecânica</span>, a Horeb Energy Fórmula UFMG é um projeto interdisciplinar da UFMG com o objetivo de projetar, fabricar e competir com um protótipo automotivo tipo Fórmula na Fórmula SAE Brasil (até 2024, equipe ficou em 2º lugar). Ao longo dos anos, a <span className='text-bluetheme-500 text-shadow-sm drop-shadow-sm'>equipe cresceu e hoje conta com integrantes de diversos cursos da universidade</span>, sob a orientação do Prof. Ariel Rodríguez Arias e apoio do LRSS. A missão é unir teoria e prática – da concepção ao teste de um carro de alta performance – enquanto <span className='text-bluetheme-500 text-shadow-sm drop-shadow-sm'>os participantes adquirem experiência real em engenharia, gestão de projeto e inovação</span>. Recentemente, a equipe lançou o protótipo TRX em parceria com a Red Bull, consolidando novos patrocínios e fortalecendo a visibilidade técnica da equipe.
								</p>
							</div>

						</div>
						<div className='w-full mt-8 mb-8'>
							<img 
								src={teamSecondPlace} 
								alt="Foto da equipe" 
								className='shadow-2xl shadow-bluetheme-200 rounded-2xl max-h-[500px] w-full object-cover' 
								data-aos="fade-in"
								data-aos-delay={200}
							/>

							{/* <ul
								role="list"
								className="mt-12 mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-4 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2"
							>
								{people.map((person) => (
									<li key={person.name}>
										<img
											alt=""
											src={person.imageUrl}
											className=" w-full rounded-2xl object-cover outline-1 -outline-offset-1 outline-black/5"
										/>
										<h3 className="mt-6 text-lg/8 font-semibold text-gray-900">{person.name}</h3>
										<p className="text-base/7 text-gray-600">{person.role}</p>
										<p className="mt-4 text-base/7 text-gray-600">{person.bio}</p>
										<ul role="list" className="mt-6 flex gap-x-6">
											<li>
												<a href={person.xUrl} className="text-gray-400 hover:text-gray-500">
													<span className="sr-only">X</span>
													<svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" className="size-5">
														<path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
													</svg>
												</a>
											</li>
											<li>
												<a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-500">
													<span className="sr-only">LinkedIn</span>
													<svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" className="size-5">
														<path
															d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
															clipRule="evenodd"
															fillRule="evenodd"
														/>
													</svg>
												</a>
											</li>
										</ul>
									</li>
								))}
							</ul> */}
						</div>

					</div>
				</div>
			</div>
		</div>
	)
}
