import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { brasaoUfmg, horse3 } from '../assets'

export default function Header() {
	const [isOpen, setIsOpen] = useState(false)
	const [scrollY, setScrollY] = useState(0)
	const [isHome, setIsHome] = useState(false);

	const routes = [
		{ name: 'Home', url: "/" },
		{ name: 'História', url: "/history" },
		{ name: 'Parceiros', url: "/sponsors" },
		{ name: 'Equipe', url: "/team" },
		{ name: 'Loja', url: "store" },
		{ name: 'Contato', url: "/contact" }
	]

	const location = useLocation();

	const handleScroll = () => {
		setScrollY(window.scrollY)
	}

	useEffect(() => {
		setIsHome(location.pathname === '/')
	}, [location.pathname])

	useEffect(() => {
		if (isHome) {
			window.addEventListener('scroll', handleScroll)
			return () => window.removeEventListener('scroll', handleScroll)
		}
	}, [isHome])

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	// Opção 1: Fade suave do fundo
	// const opacity = isHome ? Math.min(scrollY / 300, 1) : 1
	const blur = isHome ? Math.min(scrollY / 300, 1) * 8 : 0

	// Opção 2: Troca de cor baseada no scroll
	const switchToSolidColor = isHome ? scrollY > 700 : true

	const border = !isHome ? true : switchToSolidColor

	return (
		<header className={`${border ? "neonborder" : ""} fixed w-full z-50 text-white duration-200 transition-all ${switchToSolidColor ? "h-16" : "h-24"}`}>
			<div
				className={`w-full h-full transition-all duration-500 ease-in-out bg-bluetheme-800`}
				style={{
					backdropFilter: `blur(${blur}px)`,
					backgroundColor: switchToSolidColor
						? ''
						: isOpen ? '' : 'transparent',
				}}
			>
				<div className="flex items-center justify-between p-4 h-full">
					{/* Logo Cavalo */}
					<Link to="/" className="flex-shrink-0">
						<img
							src={horse3}
							className="h-12 w-12 hover:-rotate-12 hover:scale-110 transition-transform duration-300"
						/>
					</Link>

					{/* Desktop Menu */}
					<nav className="hidden md:flex gap-8 items-center">
						{routes.map((item, idx) => (
							<Link
								key={idx}
								to={item.url}
								className="text-xs uppercase tracking-[0.2em] hover:text-shadow-glow transition duration-300"
							>
								{item.name}
							</Link>
						))}
					</nav>

					{/* Mobile Menu Button */}
					<button
						onClick={() => setIsOpen(!isOpen)}
						className="md:hidden focus:outline-none"
					>
						<svg className="w-6 h-6" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
							{isOpen ? (
								<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
							) : (
								<path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
							)}
						</svg>
					</button>

					{/* Logo UFMG Desktop */}
					<div className="hidden md:block">
						<a href="https://ufmg.br/" target='_blank'>
							<img
								src={brasaoUfmg}
								alt="Logo ufmg"
								className={`transition-all h-14 w-14 cursor-pointer`}
							/>
						</a>
					</div>
				</div>

				{/* Mobile Menu Overlay */}
				{isOpen && (
					<div className="md:hidden px-4 pt-4 pb-8 bg-bluetheme-900 text-white flex flex-col items-center gap-4">
						{routes.map((item, idx) => (
							<Link
								key={idx}
								to={item.url}
								className="text-sm uppercase tracking-[0.2em] hover:text-shadow-glow transition duration-300"
								onClick={() => setIsOpen(false)}
							>
								{item.name}
							</Link>
						))}
						{/* Logo UFMG Centralizada */}
						<a href="https://ufmg.br/" target='_blank'>
							<img src={brasaoUfmg} alt="Logo UFMG" className="h-16 w-16 mt-6 cursor-pointer" />
						</a>
					</div>
				)}
			</div>
		</header>
	)
}
