import { ChevronDownIcon, PlusIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { Dialog, Disclosure } from "@headlessui/react";

const products = [
	{
		id: 1,
		name: 'Pacote com 8 Camisetas Básicas',
		href: '#',
		price: 'R$ 256',
		description: 'Adquira o conjunto completo das nossas Camisetas Básicas. Tenha uma camisa nova para cada dia da semana e uma extra para o dia da lavanderia.',
		options: '8 cores',
		imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-02-image-card-01.jpg',
		imageAlt: 'Oito camisetas organizadas sobre uma mesa nas cores preta, oliva, cinza, azul, branca, vermelha, mostarda e verde.',
	},
	{
		id: 2,
		name: 'Camiseta Básica',
		href: '#',
		price: 'R$ 32',
		description: 'Pareça um CEO visionário usando a mesma camiseta preta todos os dias.',
		options: 'Preta',
		imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-02-image-card-02.jpg',
		imageAlt: 'Frente de uma camiseta preta lisa.',
	},
	{
		id: 3,
		name: 'Camiseta Básica Quase Branca',
		href: '#',
		price: 'R$ 32',
		description: 'Provavelmente tem uns 5000 Kelvin em vez de 6000 K.',
		options: 'Branca',
		imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-02-image-card-03.jpg',
		imageAlt: 'Frente de uma camiseta branca lisa.',
	},
	{
		id: 4,
		name: 'Camiseta Básica Cinza Pedra',
		href: '#',
		price: 'R$ 32',
		description: 'Camisetas brancas mancham facilmente, e as pretas desbotam. Esta vai permanecer cinza por um bom tempo.',
		options: 'Cinza carvão',
		imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-02-image-card-04.jpg',
		imageAlt: 'Frente de uma camiseta cinza escura lisa.',
	},
	{
		id: 5,
		name: 'Pacote com 3 Camisetas Básicas Outono',
		href: '#',
		price: 'R$ 96',
		description: 'Quem precisa de minimalismo extremo quando pode ter tons terrosos? Entre no clima da estação.',
		options: 'Cinza carvão',
		imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-02-image-card-05.jpg',
		imageAlt: 'Três camisetas organizadas sobre uma mesa nas cores mostarda, cinza escuro e oliva.',
	},
	{
		id: 6,
		name: 'Pacote com 3 Camisetas Estampadas Linework',
		href: '#',
		price: 'R$ 108',
		description: 'Leve as 3 cores do nosso popular design Linework e adicione variedade à sua vida monótona.',
		options: '3 cores',
		imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-02-image-card-06.jpg',
		imageAlt: 'Três camisetas nas cores cinza, branca e azul dispostas sobre uma mesa, todas com o mesmo desenho de linhas sobreposto na parte frontal.',
	},
];

const filters = [
	{
		id: 'category',
		name: 'Categoria',
		options: [
			{ value: 'new-arrivals', label: 'Todos os Lançamentos' },
			{ value: 'tees', label: 'Camisetas' },
			{ value: 'stickers', label: 'Adesivos' },
			{ value: 'sweatshirts', label: 'Moletom' },
			{ value: 'hats', label: 'Bonés' },
		],
	},
	{
		id: 'sizes',
		name: 'Tamanhos',
		options: [
			{ value: 'xs', label: 'PP' },
			{ value: 's', label: 'P' },
			{ value: 'm', label: 'M' },
			{ value: 'l', label: 'G' },
			{ value: 'xl', label: 'GG' },
			{ value: '2xl', label: 'XGG' },
		],
	},
];

export default function Store() {
	const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}, []);

	return (
		<div className="bg-white">
			<div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
				{/* Cabeçalho */}
				<div className="border-b border-gray-200 pt-16 pb-10">
					<h1 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl text-center">Produtos</h1>
					<p className="mt-4 text-base text-gray-500 text-center">
						Confira o lançamento mais recente das Camisetas Básicas, agora novas e melhoradas com quatro aberturas!
					</p>
				</div>

				<div className="pt-12 lg:grid lg:grid-cols-3 lg:gap-x-8">
					{/* Filtros Mobile */}
					<div className="lg:hidden">
						<button
							type="button"
							className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900"
							onClick={() => setMobileFiltersOpen(true)}
						>
							<span>Filtros</span>
							<PlusIcon className="ml-1 h-5 w-5 flex-shrink-0 text-gray-400" />
						</button>

						<Dialog
							as="div"
							className="relative z-40 lg:hidden"
							open={mobileFiltersOpen}
							onClose={setMobileFiltersOpen}
						>
							<div className="fixed inset-0 z-40 flex">
								<Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
									<div className="flex items-center justify-between px-4">
										<h2 className="text-lg font-medium text-gray-900">Filtros</h2>
										<button
											type="button"
											className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
											onClick={() => setMobileFiltersOpen(false)}
										>
											<span className="sr-only">Fechar menu</span>
											<XMarkIcon className="h-6 w-6" />
										</button>
									</div>

									{/* Filtros */}
									{/* Filtros */}
									<form className="mt-4 border-t border-gray-200">
										{filters.map((section) => (
											<Disclosure as="div" key={section.id} className="border-t border-gray-200 px-4 py-6">
												{({ open }) => (
													<>
														<h3 className="-mx-2 -my-3 flow-root">
															<Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
																<span className="font-medium text-gray-900">{section.name}</span>
																<span className="ml-6 flex items-center">
																	<ChevronDownIcon
																		className={`h-5 w-5 transform ${open ? '-rotate-180' : 'rotate-0'}`}
																		aria-hidden="true"
																	/>
																</span>
															</Disclosure.Button>
														</h3>
														<Disclosure.Panel className="pt-6">
															<div className="space-y-6">
																{section.options.map((option, optionIdx) => (
																	<div key={option.value} className="flex items-center">
																		<input
																			id={`filter-mobile-${section.id}-${optionIdx}`}
																			name={`${section.id}[]`}
																			defaultValue={option.value}
																			type="checkbox"
																			className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
																		/>
																		<label
																			htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
																			className="ml-3 text-sm text-gray-500"
																		>
																			{option.label}
																		</label>
																	</div>
																))}
															</div>
														</Disclosure.Panel>
													</>
												)}
											</Disclosure>
										))}
									</form>
								</Dialog.Panel>
							</div>
						</Dialog>
					</div>

					{/* Filtros Desktop */}
					<div className="hidden lg:block">
						<form className="space-y-10 divide-y divide-gray-200">
							{filters.map((section, sectionIdx) => (
								<div key={section.id} className={sectionIdx === 0 ? null : 'pt-10'}>
									<fieldset>
										<legend className="block text-sm font-medium text-gray-900">{section.name}</legend>
										<div className="space-y-3 pt-6">
											{section.options.map((option, optionIdx) => (
												<div key={option.value} className="flex items-center">
													<input
														id={`filter-${section.id}-${optionIdx}`}
														name={`${section.id}[]`}
														defaultValue={option.value}
														type="checkbox"
														className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
													/>
													<label
														htmlFor={`filter-${section.id}-${optionIdx}`}
														className="ml-3 text-sm text-gray-600"
													>
														{option.label}
													</label>
												</div>
											))}
										</div>
									</fieldset>
								</div>
							))}
						</form>
					</div>

					{/* Grid de Produtos */}
					<div className="mt-6 lg:col-span-2 lg:mt-0">
						<div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
							{products.map((product) => (
								<div
									key={product.id}
									className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
								>
									<div className="aspect-h-3 aspect-w-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-96">
										<img
											src={product.imageSrc}
											alt={product.imageAlt}
											className="h-full w-full object-cover object-center sm:h-full sm:w-full"
										/>
									</div>
									<div className="flex flex-1 flex-col space-y-2 p-4">
										<h3 className="text-sm font-medium text-gray-900">
											<a href={product.href}>
												<span aria-hidden="true" className="absolute inset-0" />
												{product.name}
											</a>
										</h3>
										<p className="text-sm text-gray-500">{product.description}</p>
										<div className="flex flex-1 flex-col justify-end">
											<p className="text-sm italic text-gray-500">{product.options}</p>
											<p className="text-base font-medium text-gray-900">{product.price}</p>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}