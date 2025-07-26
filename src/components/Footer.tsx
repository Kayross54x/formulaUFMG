import { insta, linkedin, tiktok, youtube, zap } from "../assets"

export default function Footer() {
	const navigation = [
		{
			name: 'TikTok',
			href: 'https://www.tiktok.com/@formula.ufmg',
			icon: tiktok,
		},
		{
			name: 'Instagram',
			href: 'https://www.instagram.com/formulaufmg/',
			icon: insta,
		},
		{
			name: 'Linkedin',
			href: 'https://www.linkedin.com/company/f%C3%B3rmulaufmg/',
			icon: linkedin
		},
		{
			name: 'Youtube',
			href: 'https://www.youtube.com/channel/UCG13U5V92XVoqfVdqQRoEgA',
			icon: youtube,
		},
		{
			name: 'WhatsApp',
			href: 'https://wa.me/+553189442303',
			icon: zap,
		}

	]
	return (
		<footer className="neonborder bg-bluetheme-800 flex flex-col items-center justify-center">
			<div className="w-full border-t border-b pb-8 border-gray-700 flex items-center justify-center">
				<div className="w-full max-w-7xl  pt-8 lg:flex lg:items-center lg:justify-between px-6 lg:px-8">
					<div>
						<h3 className="text-sm/6 font-semibold text-gray-100">Se inscreva em nossa NewsLetter</h3>
						<p className="mt-2 text-sm/6 text-gray-200">
							Fique por dentro das últimas notícias do Horeb Energy Fórmula UFMG
						</p>
					</div>
					<form className="mt-6 sm:flex sm:max-w-md lg:mt-0">
						<label htmlFor="email-address" className="sr-only">
							Email address
						</label>
						<input
							id="email-address"
							name="email-address"
							type="email"
							required
							placeholder="Insira o Email"
							autoComplete="email"
							className="w-full min-w-0 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus-visible:outline-indigo-600 sm:w-56 sm:text-sm/6"
						/>
						<div className="mt-4 sm:mt-0 sm:ml-4 sm:shrink-0">
							<button
								type="submit"
								className="flex w-full items-center justify-center rounded-lg hover:bg-gray-100 bg-white border px-3 py-2 text-sm  transition-all shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>
								Inscrever
							</button>
						</div>
					</form>
				</div>
			</div>

			<div className="mx-auto w-full max-w-7xl pb-12 md:flex md:items-center md:justify-between px-6 lg:px-8 mt-0 sm:mt-8 pt-8">
				<div className="flex justify-center gap-x-6 md:order-2">
					{navigation.map((item) => (
						<a key={item.name} href={item.href} target="_blank" className="text-gray-600 hover:text-gray-800">
							<span className="sr-only">{item.name}</span>
							<img src={item.icon} aria-hidden="true" className="h-6 w-6" />
						</a>
					))}
				</div>
				<p className="mt-8 text-center text-sm/6 text-gray-100 md:order-1 md:mt-0">
					&copy; 2025 Horeb Energy Fórmula UFMG. Todos os direitos reservados.
				</p>
			</div>
		</footer>
	)
}
